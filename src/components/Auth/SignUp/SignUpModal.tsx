import React, { useEffect, useContext } from 'react';
import { Divider, Button, Form, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from '../../../GraphQl/Mutations/Auth';
import AuthContext from '../../../context/AuthContext/authContext';
import AuthModalContext from '../../../context/AuthModalContext/authModalContext';
import styles from './SignUp.module.scss';

type FormData = {
  companyName: string;
  email: string;
  password: string;
};

const SignUpFormModal: React.FC = () => {
  // Get context stuff
  const { setToken } = useContext(AuthContext);
  const { closeSignUpModal, isSignUpOpen, openLoginModal } = useContext(AuthModalContext);

  const { register, handleSubmit, errors, setValue, triggerValidation } = useForm<FormData>();

  useEffect(() => {
    register(
      { name: 'companyName' },
      {
        required: true,
        minLength: 3,
        maxLength: 20,
      },
    );

    register(
      { name: 'email' },
      {
        required: true,
        pattern: /\S+@\S+\.\S+/,
      },
    );
    register(
      { name: 'password' },
      {
        pattern: /^\S+$/,
        required: true,
        minLength: 6,
        maxLength: 15,
      },
    );
  }, [register]);

  const [addUser, { loading }] = useMutation(SIGN_UP, {
    update(_, { data }) {
      setToken(data.userSignUp.token);
    },
    onError(err) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      console.log(err.graphQLErrors[0].extensions!.exception.errors);
    },
  });

  const onSubmit = handleSubmit(({ companyName, email, password }) => {
    addUser({
      variables: {
        companyName,
        email,
        password,
      },
    });
  });
  return (
    <>
      <Modal
        size="mini"
        open={isSignUpOpen}
        closeOnEscape={false}
        closeOnDimmerClick={false}
        onClose={closeSignUpModal}
        closeIcon
        className={styles.customCard}
      >
        <Modal.Content>
          <h3 className={styles.customFormTitle}>Create a new Fiklin Publisher account</h3>
        </Modal.Content>
        <Modal.Content style={{ textAlign: 'center' }}>
          <Form className={styles.customForm} noValidate onSubmit={onSubmit} loading={loading}>
            <Form.Input
              className={styles.customFormInput}
              type="text"
              label="Company name"
              fluid
              placeholder="Company name"
              name="companyName"
              onChange={async (e, { name, value }): Promise<void> => {
                setValue(name, value);
                await triggerValidation(name);
              }}
              error={!!errors.companyName}
            />
            {errors.companyName && errors.companyName.type === 'required' && <p>Company name is required</p>}
            {errors.companyName && errors.companyName.type === 'minLength' && (
              <p>companyName should be at least 3 characters long</p>
            )}
            {errors.companyName && errors.companyName.type === 'maxLength' && <p>Company name is too long</p>}
            <Form.Input
              className={styles.customFormInput}
              type="email"
              label="Email"
              fluid
              placeholder="Email"
              name="email"
              onChange={async (e, { name, value }): Promise<void> => {
                setValue(name, value);
                await triggerValidation(name);
              }}
              error={!!errors.email}
            />
            {errors.email && errors.email.type === 'required' && <p>Email is required</p>}
            {errors.email && errors.email.type === 'pattern' && <p>Your email is invalid</p>}
            {errors.email && errors.email.type === 'validate' && <p>Email already exists</p>}
            <Form.Input
              className={styles.customFormInput}
              type="password"
              label="Password"
              fluid
              placeholder="Password"
              name="password"
              onChange={async (e, { name, value }): Promise<void> => {
                setValue(name, value);
                await triggerValidation(name);
              }}
              error={!!errors.password}
            />
            {errors.password && errors.password.type === 'pattern' && <p>No spaces allowed</p>}
            {errors.password && errors.password.type === 'required' && <p>Password is required</p>}
            {errors.password && errors.password.type === 'minLength' && (
              <p>Password should have at least 6 characters</p>
            )}
            {errors.password && errors.password.type === 'maxLength' && <p>Password is too long</p>}
            <Button
              type="submit"
              className={`${styles.customSuccessButton} ${styles.customAuthBtn}`}
              style={{ marginTop: '16px' }}
            >
              Sign Up
            </Button>
          </Form>
          <Divider />
          <p className={styles.customBottomText}>By signing up, you agree to Fiklins Terms of Service.</p>
          <p>
            <Button onClick={openLoginModal} className={styles.customLinkButton}>
              Login instead.
            </Button>
          </p>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default withRouter(SignUpFormModal);
