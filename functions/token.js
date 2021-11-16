const fauna = require('faunadb');
const catchify = require('catchify');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');

const q = fauna.query;
const client = new fauna.Client({
  secret: process.env.FAUNA_KEY || '',
  domain: 'db.fauna.com',
  scheme: 'https',
});

const EMAIL_TOKEN = process.env.EMAIL_TOKEN;
sgMail.setApiKey(process.env.SENDGRID_KEY);

const handler = async (event) => {
  const { attributes } = JSON.parse(event.body).data;
  const [err] = await catchify(client.query(q.Get(q.Match(q.Index('email'), attributes.email))));

  if (err) {
    const payload = {
      ...attributes,
      created: new Date().toISOString(),
    };
    await client.query(q.Create(q.Collection('users'), { data: payload }));
    console.log(`Created new user with email address: ${attributes.email}`);
  }

  const token = await jwt.sign({ email: attributes.email }, EMAIL_TOKEN);

  await sgMail
    .send({
      html: `<p>Hey there, ${attributes.firstName}!</p><p>We're so excited for you to read the Bible with us.</p><p><a href="https://readadvent.com/auth?token=${token}">Here's your magic link.</a> Just click it and you'll be logged in!</p><p>~ Matt</p>`,
      to: attributes.email,
      from: 'no-reply@readadvent.com',
      subject: 'Your magic link for Read:Advent',
    })
    .catch((e) => {
      console.log(e);
    });

  console.log(`Sent email with token.`);

  return {
    statusCode: 200,
  };
};

exports.handler = handler;
