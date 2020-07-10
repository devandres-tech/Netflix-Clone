import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import NotFound from './NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Layout} />
      <Router component={Search} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
