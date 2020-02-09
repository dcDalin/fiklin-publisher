import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../Routes';
import Home from '../pages/Home';
import FAQ from '../pages/FAQ';
import LogOut from '../components/Auth/LogOut';
import styles from './Routes.module.scss';
import ScrollToTop from './ScrollToTop';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import AuthContext from '../context/AuthContext/authContext';
import AuthRoute from '../Routes/AuthRoute';
import ProtectedRoute from '../Routes/ProtectedRoute';

const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  console.log('isAuthenticated is: ', isAuthenticated);
  return (
    <div className={styles.rootBody}>
      <ScrollToTop />
      <Switch>
        <ProtectedRoute path={routes.FAQ} component={FAQ} isAuthenticated={isAuthenticated} />
        <Route path={routes.LOGOUT}>
          <LogOut />
        </Route>
        <AuthRoute exact path={routes.HOME} component={Home} isAuthenticated={isAuthenticated} />
        <ProtectedRoute path={routes.DASHBOARD} component={Dashboard} isAuthenticated={isAuthenticated} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
