import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Image, Loader } from 'semantic-ui-react';
import { WHO_IS_ME } from '../../../GraphQl/Queries/Auth';

const DropDownTrigger: React.FC = () => {
  const { loading, data } = useQuery(WHO_IS_ME);
  const { companyName } = data.publisherMe;
  const { url } = data.publisherMe.profile.picture;

  return (
    <span>
      <Image avatar src={url} />
      {companyName}
      <Loader active={loading} size="tiny" />
    </span>
  );
};

export default DropDownTrigger;
