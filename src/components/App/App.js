import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import '../../assets/styles/main.scss';

const Home = lazy(() => import('../../pages/Homepage'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="loader"></div>}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;