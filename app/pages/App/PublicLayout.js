import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'shared/routes';

const PublicLayout = () => (
  <Switch>
    <Route exact path={routes.LOGIN.path} component={routes.LOGIN.component} />
    {/* <Route
      exact
      path={routes.REGISTER.path}
      component={routes.REGISTER.component}
    /> */}
    <Route path="/" component={routes.LOGIN.component} />
  </Switch>
);

export default PublicLayout;
