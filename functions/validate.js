const cookie = require('cookie');
const jwt = require('jsonwebtoken');

const CLIENT_SECRET = process.env.COOKIE_TOKEN || '';

const safelyVerify = (token) => {
  try {
    return jwt.verify(token, CLIENT_SECRET);
  } catch (e) {
    return null;
  }
};

const handler = async (event) => {
  const { cookie: cookies } = event.headers;

  const response = {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'Content-Type': 'application/json',
    },
    statusCode: 200,
  };

  if (!cookies) {
    response.statusCode = 400;
  } else {
    const token = cookie.parse(cookies)['read_advent-token'];
    if (!safelyVerify(token)) {
      response.statusCode = 400;
    }
  }

  return Promise.resolve(response);
};

exports.handler = handler;
