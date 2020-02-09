import * as React from 'react';
import { Redirect, Route } from 'react-router';
import * as routes from './index';

const ProtectedRoute = ({ component, isAuthenticated, ...rest }: any): any => {
  const routeComponent = (props: any): any =>
    isAuthenticated ? React.createElement(component, props) : <Redirect to={{ pathname: routes.HOME }} />;
  return <Route {...rest} render={routeComponent} />;
};

export default ProtectedRoute;
