import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import * as routes from '../../Routes';
import Home from './Home';
import Summary from './Summary';
import Tours from './Tours';
import Team from './Team';
import Profile from './Profile';

const DashboardRouter: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={Home} />
      <Route exact path={`${match.url}${routes.SUMMARY}`} component={Summary} />
      <Route exact path={`${match.url}${routes.TOURS}`} component={Tours} />
      <Route exact path={`${match.url}${routes.TEAM}`} component={Team} />
      <Route exact path={`${match.url}${routes.PROFILE}`} component={Profile} />
      <Route path={match.path}>
        <h3>404</h3>
      </Route>
    </Switch>
  );
};
export default DashboardRouter;
