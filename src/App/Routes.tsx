import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../Routes';
import Home from '../pages/Home';
import FAQ from '../pages/FAQ';
import LogOut from '../components/Auth/LogOut';
import styles from './Routes.module.scss';
import ScrollToTop from './ScrollToTop';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <div className={styles.rootBody}>
      <ScrollToTop />
      <Switch>
        <Route path={routes.FAQ}>
          <FAQ />
        </Route>
        <Route path={routes.LOGOUT}>
          <LogOut />
        </Route>
        <Route exact path={routes.HOME}>
          <Home />
        </Route>
        <Route path={routes.DASHBOARD}>
          <Dashboard />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
