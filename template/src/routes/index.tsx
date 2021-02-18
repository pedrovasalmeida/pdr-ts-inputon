/** Packages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ClearPage from '../pages/ClearPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/" component={NotFound} />
    <Route path="/clear" component={ClearPage} />
  </Switch>
);

export default Routes;
