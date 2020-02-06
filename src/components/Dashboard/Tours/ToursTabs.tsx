/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Tab } from 'semantic-ui-react';
import MyTours from './MyTours';
import NewTour from './NewTour';

const panes = [
  {
    menuItem: 'My Tours',
    render: () => <MyTours />,
  },
  {
    menuItem: 'New Tour',
    render: () => <NewTour />,
  },
];

const ToursTabs: React.FC = () => <Tab panes={panes} />;

export default ToursTabs;
