import React, { useContext } from 'react';
import { Grid, Responsive, Menu, Segment, Sidebar } from 'semantic-ui-react';
import ActiveNavContext from '../../context/ActiveNavContext/activeNavContext';
import getWidth from '../../utils/getWidth';
import DashboardMenu from './DashboardMenu';
import DashboardRouter from './DashboardRouter';
import styles from './Dashboard.module.scss';

const ResponsiveDashMenu: React.FC = () => {
  const { visible, onHide } = useContext(ActiveNavContext);
  return (
    <>
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Grid divided="vertically">
          <Grid.Column>
            <Menu compact icon="labeled" borderless vertical className={styles.sideWrapper}>
              <DashboardMenu />
            </Menu>
          </Grid.Column>
          <Grid.Column width={12} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '2em' }}>
            <DashboardRouter />
          </Grid.Column>
        </Grid>
      </Responsive>

      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable
          as={Segment}
          className={visible ? `${styles.mobileMenu} ${styles.mobileMenuNoScroll}` : `${styles.mobileMenu}`}
        >
          <Sidebar
            as={Menu}
            animation="overlay"
            borderless
            icon="labeled"
            vertical
            visible={visible}
            onHide={onHide}
            width="thin"
            className={styles.mobileSideBar}
          >
            <DashboardMenu />
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            <Segment basic className={styles.mobileDashContent}>
              <DashboardRouter />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    </>
  );
};

export default ResponsiveDashMenu;
