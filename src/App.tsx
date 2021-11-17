import { Fragment, h } from 'preact';
import { useEffect } from 'preact/hooks';
import { styled } from 'goober';
import { Route, Switch } from 'wouter-preact';

import Home from './Home';
import { useState } from 'preact/hooks';
import Navigation from './Navigation';
import Copyright from './Copyright';
import Reading from './Reading';
import Help from './Help';
import Achievements from './Achievements';
import Auth from './Auth';

const Wrapper = styled('div')`
  display: block;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const Footer = styled('footer')`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const App = () => {
  const [isAuthed, setIsAuthed] = useState<boolean | 'unknown'>('unknown');

  useEffect(() => {
    fetch('/.netlify/functions/validate').then((d) => {
      if (d.status !== 200) {
        setIsAuthed(false);
      } else {
        setIsAuthed(true);
      }
    });
  }, []);

  return (
    <Fragment>
      {isAuthed === true && (
        <Wrapper>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/days/:day/:type" component={Reading} />
            <Route path="/help" component={Help} />
            <Route path="/achievements" component={Achievements} />
            <Route component={Home} />
          </Switch>
          <Footer>
            <Copyright />
          </Footer>
        </Wrapper>
      )}
      {!isAuthed && <Auth />}
    </Fragment>
  );
};

export default App;
