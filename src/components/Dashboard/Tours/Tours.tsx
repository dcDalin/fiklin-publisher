import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';
import styles from './Tours.module.scss';
import DashHeader from '../Components/DashHeader';
import DashTopMessage from '../Components/DashTopMessage';
import ToursTabs from './ToursTabs';

const Tours: React.FC = () => {
  return (
    <>
      <DashTopMessage title="Tours" description="Create new tours and manage existing ones." />
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <DashHeader title="Tours" icon="bus" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ToursTabs />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Tours;
