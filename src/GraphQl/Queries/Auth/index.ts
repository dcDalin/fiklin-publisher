import gql from 'graphql-tag';

const WHO_IS_ME = gql`
  query PublisherMe {
    publisherMe {
      id
      companyName
      bio
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
      }
    }
  }
`;

export { WHO_IS_ME };
