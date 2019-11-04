import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import '../../assets/styles/main.scss';

// TODO: Currently react-snapshot does not supporl the Suspend API, looking for solutions
// const Home = lazy(() => import('../../pages/Homepage'));
import Home from '../../pages/Homepage';

const App = () => (
  <Router>
    {/* <Suspense fallback={<div className="loader" />}> */}
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
    {/* </Suspense>  */}
  </Router>
);

export default App;
