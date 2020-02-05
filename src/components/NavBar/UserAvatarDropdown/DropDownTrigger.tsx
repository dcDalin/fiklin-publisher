import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Image } from 'semantic-ui-react';
import { WHO_IS_ME } from '../../../GraphQl/Queries/Auth';

const DropDownTrigger: React.FC = () => {
  const { data } = useQuery(WHO_IS_ME);
  const { url } = data.publisherMe.profile.picture;

  return (
    <span>
      <Image avatar src={url} />
    </span>
  );
};

export default DropDownTrigger;
