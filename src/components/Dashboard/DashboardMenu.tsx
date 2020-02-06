import React, { useContext } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import ActiveNavContext from '../../context/ActiveNavContext/activeNavContext';
import * as routes from '../../Routes';
import styles from './Dashboard.module.scss';

const DashboardMenu: React.FC = () => {
  const match = useRouteMatch();
  const { activeItem, handleSidebarClick } = useContext(ActiveNavContext);

  return (
    <>
      <Menu.Item className={styles.sideMenu}>MENU</Menu.Item>
      <Menu.Item
        as={Link}
        to={`${match.url}`}
        name="dashboard"
        className={activeItem === 'dashboard' ? `${styles.active}` : `${styles.menuItem}`}
        onClick={handleSidebarClick}
      >
        <Icon name="dashboard" className={styles.icon} />
        <span className={styles.text}>Dashboard</span>
      </Menu.Item>
      <Menu.Item className={styles.sideMenu}>AFFILIATE</Menu.Item>
      <Menu.Item
        as={Link}
        to={`${match.url}${routes.SUMMARY}`}
        name={`${match.url}${routes.SUMMARY}`}
        className={activeItem === `${match.url}${routes.SUMMARY}` ? `${styles.active}` : `${styles.menuItem}`}
        onClick={handleSidebarClick}
      >
        <Icon name="line graph" className={styles.icon} />
        <span className={styles.text}>Summary</span>
      </Menu.Item>
      <Menu.Item className={styles.sideMenu}>PUBLISHER</Menu.Item>
      <Menu.Item
        as={Link}
        to={`${match.url}${routes.TOURS}`}
        name={`${match.url}${routes.TOURS}`}
        className={activeItem === `${match.url}${routes.TOURS}` ? `${styles.active}` : `${styles.menuItem}`}
        onClick={handleSidebarClick}
      >
        <Icon name="bus" className={styles.icon} />
        <span className={styles.text}>Tours</span>
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={`${match.url}${routes.TEAM}`}
        name={`${match.url}${routes.TEAM}`}
        className={activeItem === `${match.url}${routes.TEAM}` ? `${styles.active}` : `${styles.menuItem}`}
        onClick={handleSidebarClick}
      >
        <Icon name="users" className={styles.icon} />
        <span className={styles.text}>Team</span>
      </Menu.Item>
      <Menu.Item className={styles.sideMenu}>ACCOUNT</Menu.Item>
      <Menu.Item
        as={Link}
        to={`${match.url}${routes.PROFILE}`}
        name={`${match.url}${routes.PROFILE}`}
        className={activeItem === `${match.url}${routes.PROFILE}` ? `${styles.active}` : `${styles.menuItem}`}
        onClick={handleSidebarClick}
      >
        <Icon name="user" className={styles.icon} />
        <span className={styles.text}>Profile</span>
      </Menu.Item>
      <Menu.Item as={Link} to={routes.LOGOUT} name="dashboard" className={styles.menuItem}>
        <Icon name="log out" className={styles.icon} />
        <span className={styles.text}>Log Out</span>
      </Menu.Item>
    </>
  );
};

export default DashboardMenu;
