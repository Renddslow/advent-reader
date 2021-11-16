import { Fragment, h } from 'preact';
import { styled } from 'goober';
import { Route, Switch } from 'wouter-preact';

import Home from './Home';
import { useState } from 'preact/hooks';
import Navigation from './Navigation';
import Copyright from './Copyright';
import Reading from './Reading';

const Wrapper = styled('div')`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
`;

const App = () => {
  const [isAuthed, setIsAuthed] = useState<boolean | 'unknown'>(true); // TODO: auth

  return (
    <Wrapper>
      {isAuthed === true ? (
        <Fragment>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/days/:day/:type" component={Reading} />
            <Route component={Home} />
          </Switch>
        </Fragment>
      ) : (
        <div />
      )}
      <footer>
        <Copyright />
      </footer>
    </Wrapper>
  );
};

export default App;
