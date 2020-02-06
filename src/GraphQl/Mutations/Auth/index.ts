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

const UPDATE_PROFILE_PIC = gql`
  mutation UserUpdateProfilePicture($file: Upload!) {
    userUpdateProfilePicture(file: $file) {
      id
      username
      displayName
      email {
        emailAddress
        isVerified
      }
      profile {
        picture {
          public_id
          url
        }
        phone {
          phoneNumber
          isVerified
        }
        accountType
      }
    }
  }
`;

export { SIGN_UP, SIGN_IN, UPDATE_PROFILE_PIC };
