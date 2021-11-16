import { h, Fragment } from 'preact';
import { styled } from 'goober';
import { useState } from 'preact/hooks';

import Input from './Input';
import Hero from './Hero';

type Payload = {
  type: 'signup' | 'login';
  attributes: {
    firstName?: string;
    lastName?: string;
    email: string;
  };
};

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-height: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LoginCard = styled('div')`
  max-width: 400px;
  width: 85%;
  background: #fff;
  box-shadow: 0 2px 12px 1px rgba(80, 18, 90, 0.3);
  border-radius: 8px;
  padding: 24px;
  margin: 192px auto 48px;

  p {
    margin-top: 12px;
  }

  @media screen and (max-width: 768px) {
    margin: 96px auto 48px;
  }
`;

const Form = styled('form')`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  margin-top: 24px;
`;

const Row = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 8px;
`;

const Button = styled('button')`
  display: flex;
  margin: 8px auto 0;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  color: #fff;
  background: #87109e;
  font-size: inherit;
  font-family: inherit;
  border: 0;
  appearance: none;
  font-weight: 600;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const SwitchLink = styled('button')`
  font-size: inherit;
  font-family: inherit;
  border: 0;
  appearance: none;
  color: #ff99c8;
  text-decoration: underline;
  font-weight: 600;
  background: transparent;
  cursor: pointer;
  margin-top: 12px;
`;

const Auth = () => {
  const [loginStage, setLoginStage] = useState<'login' | 'signup'>('signup');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data: Partial<Payload> = {
      type: 'login',
      attributes: {
        email,
      },
    };

    if (loginStage === 'signup') {
      data.type = 'signup';
      data.attributes.firstName = firstName;
      data.attributes.lastName = lastName;
    }

    setSending(true);
    fetch('/.netlify/functions/token', {
      method: 'POST',
      body: JSON.stringify({
        data,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setShowConfirmation(true);
    });
  };

  return (
    <Wrapper>
      <Hero />
      <div>
        <LoginCard>
          <h2>{loginStage === 'signup' ? 'Sign Up' : 'Login'}</h2>
          {showConfirmation ? (
            <div>
              <p>
                Awesome! An email has been sent with a login link. We're so excited to read with
                you.
              </p>
            </div>
          ) : (
            <Fragment>
              {loginStage === 'signup' && (
                <p>Create a free account to track your progress, read online, and earn badges.</p>
              )}
              <SwitchLink
                onClick={() => setLoginStage((s) => (s === 'signup' ? 'login' : 'signup'))}
              >
                {loginStage === 'signup'
                  ? 'Already have an account? Login.'
                  : `Don't have an account? Signup.`}
              </SwitchLink>
              <Form onSubmit={handleSubmit}>
                {loginStage === 'signup' && (
                  <Row>
                    <Input
                      id="first-name"
                      label="First Name"
                      required
                      value={firstName}
                      onChange={(v) => setFirstName(v)}
                      disabled={sending}
                    />
                    <Input
                      id="last-name"
                      label="Last Name"
                      required
                      value={lastName}
                      onChange={(v) => setLastName(v)}
                      disabled={sending}
                    />
                  </Row>
                )}
                <Input
                  id="email"
                  label="Email Address"
                  required
                  value={email}
                  onChange={(v) => setEmail(v)}
                  elementType="email"
                  disabled={sending}
                />
                <Button type="submit">
                  {!sending && 'Sign Up'}
                  <span class="material-icons-outlined">
                    {sending ? 'motion_photos_on' : 'arrow_forward'}
                  </span>
                </Button>
              </Form>
            </Fragment>
          )}
        </LoginCard>
      </div>
    </Wrapper>
  );
};

export default Auth;
