import React, { useState } from 'react';
import { Message, Grid } from 'semantic-ui-react';
import styles from './Profile.module.scss';
import { useQuery } from '@apollo/react-hooks';
import UpdateProfilePicModal from './UpdateProfilePicModal';
import { WHO_IS_ME } from '../../../GraphQl/Queries/Auth';
import UpdateProfileForm from './UpdateProfileForm';

const Profile: any = () => {
  const [visible, setVisible] = useState(true);

  const { loading, error, data } = useQuery(WHO_IS_ME);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { url } = data.me.profile.picture;

  const handleDismiss = (): void => {
    setVisible(false);
  };
  return (
    <>
      {visible ? (
        <Message
          info
          onDismiss={handleDismiss}
          header="Welcome back!"
          content="This is a special notification which you can dismiss."
        />
      ) : null}
      <h2 className={styles.dashHeading}>My Profile</h2>
      <Grid>
        <h4 className={styles.dashSubHeading}>MY PROFILE PICTURE</h4>
        <Grid.Row>
          <Grid.Column>
            <UpdateProfilePicModal url={url} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <UpdateProfileForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Profile;
