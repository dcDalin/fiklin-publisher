import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import { WHO_IS_ME } from '../../../GraphQl/Queries/Auth';
import styles from './Profile.module.scss';

const UpdateProfileForm: React.FC = () => {
  const { data } = useQuery(WHO_IS_ME);

  return (
    <Form className={`${styles.customForm} ${styles.dashForm}`}>
      <Form.Field>
        <label>Email</label>
        <input placeholder="Email" value={data.me.email.emailAddress} disabled />
      </Form.Field>
      <Form.Field>
        <label>Username</label>
        <input placeholder="Username" value={data.me.username} />
      </Form.Field>
      <Form.Field>
        <label>Display Name</label>
        <input placeholder="Display Name" value={data.me.displayName} />
      </Form.Field>
      <Form.Field>
        <label>Phone Number</label>
        <input placeholder="Phone Number" value={data.me.profile.phoneNumber} />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default UpdateProfileForm;
