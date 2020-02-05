import gql from 'graphql-tag';

const SIGN_UP = gql`
  mutation PublisherSignUp($companyName: String!, $email: String!, $password: String!) {
    publisherSignUp(publisherSignUpInput: { companyName: $companyName, email: $email, password: $password }) {
      token
    }
  }
`;

const SIGN_IN = gql`
  mutation PublisherSignIn($email: String!, $password: String!) {
    publisherSignIn(publisherSignInInput: { email: $email, password: $password }) {
      token
    }
  }
`;

export { SIGN_UP, SIGN_IN };
