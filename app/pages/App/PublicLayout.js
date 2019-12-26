import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from 'shared/routes';

const PublicLayout = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to={routes.LOGIN.path} />} />
    <Route exact path={routes.LOGIN.path} component={routes.LOGIN.component} />
    <Route
      exact
      path={routes.REGISTER.path}
      component={routes.REGISTER.component}
    />
  </Switch>
);

export default PublicLayout;
