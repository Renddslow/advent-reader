const fauna = require('faunadb');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const COOKIE_TOKEN = process.env.COOKIE_TOKEN;
const q = fauna.query;
const client = new fauna.Client({
  secret: process.env.FAUNA_KEY || '',
  domain: 'db.fauna.com',
  scheme: 'https',
});

const safelyVerify = (token) => {
  try {
    return jwt.verify(token, COOKIE_TOKEN);
  } catch (e) {
    return null;
  }
};

const handler = async (event) => {
  const { cookie: cookies } = event.headers;
  const { day, type } = JSON.parse(event.body);

  const response = {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'Content-Type': 'application/json',
    },
    statusCode: 200,
  };

  if (!cookies) {
    response.statusCode = 400;
    return Promise.resolve(response);
  }

  const token = cookie.parse(cookies)['read_advent-token'];
  const tokenPayload = await safelyVerify(token);

  if (!tokenPayload) {
    response.statusCode = 400;
    return Promise.resolve(response);
  }

  const { email } = tokenPayload;
  const match = await client.query(q.Get(q.Match(q.Index('email'), email)));

  const userRef = match.ref.toJSON()['@ref'].id;

  const completions = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index('completion-user'), userRef)),
      q.Lambda('x', q.Get(q.Var('x'))),
    ),
  );

  const completion = completions.data
    .map(({ data }) => data)
    .find((d) => d.day === day && d.type === type);

  return {
    statusCode: !!completion ? 200 : 400,
    body: JSON.stringify(completion),
  };
};

exports.handler = handler;
