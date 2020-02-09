import * as React from 'react';
import { Redirect, Route } from 'react-router';
import * as routes from './index';

const AuthRoute = ({ component, isAuthenticated, ...rest }: any): any => {
  const routeComponent = (props: any): any =>
    isAuthenticated ? <Redirect to={{ pathname: routes.DASHBOARD }} /> : React.createElement(component, props);
  return <Route {...rest} render={routeComponent} />;
};

export default AuthRoute;
