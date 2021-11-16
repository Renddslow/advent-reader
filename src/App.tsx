import { Fragment, h } from 'preact';
import { styled } from 'goober';
import { Route, Switch } from 'wouter-preact';

import Home from './Home';
import { useState } from 'preact/hooks';
import Navigation from './Navigation';

const Wrapper = styled('div')`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: #f5f5f5;
  height: 100%;
`;

const App = () => {
  const [isAuthed, setIsAuthed] = useState<boolean | 'unknown'>(true);

  return (
    <Wrapper>
      {isAuthed === true ? (
        <Fragment>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/days/:day/:type">Hello</Route>
            <Route component={Home} />
          </Switch>
        </Fragment>
      ) : (
        <div />
      )}
    </Wrapper>
  );
};

export default App;
