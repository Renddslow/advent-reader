const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const fauna = require('faunadb');

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
  const { day, read, type } = JSON.parse(event.body);

  const response = {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'Content-Type': 'application/json',
    },
    statusCode: 200,
  };

  if (!cookies) {
    return Promise.resolve({
      statusCode: 400,
    });
  }

  const token = cookie.parse(cookies)['read_advent-token'];
  const tokenPayload = await safelyVerify(token);

  if (!tokenPayload) {
    return Promise.resolve({
      statusCode: 400,
    });
  }

  const { email } = tokenPayload;
  const match = await client.query(q.Get(q.Match(q.Index('email'), email)));

  const userRef = match.ref.toJSON()['@ref'].id;

  const faunaPayload = {
    user: userRef,
    read,
    type,
    day: parseInt(day, 10),
  };

  await client.query(q.Create(q.Collection('completions'), { data: faunaPayload }));

  return response;
};

exports.handler = handler;
