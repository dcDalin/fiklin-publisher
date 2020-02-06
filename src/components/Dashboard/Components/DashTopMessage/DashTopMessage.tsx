import React, { useState } from 'react';
import { Message } from 'semantic-ui-react';

interface Props {
  title: string;
  description: string;
}

const DashTopMessage: React.FC<Props> = (props: Props) => {
  const { title, description } = props;

  const [visible, setVisible] = useState(true);
  const handleDismiss = (): void => {
    setVisible(false);
  };

  const message = <Message info onDismiss={handleDismiss} header={title} content={description} />;

  return visible ? message : null;
};

export default DashTopMessage;
