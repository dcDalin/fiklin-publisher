import React, { useState } from 'react';
import { Message } from 'semantic-ui-react';

const Events: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const handleDismiss = (): void => {
    setVisible(false);
  };
  return (
    <>
      {visible ? (
        <Message info onDismiss={handleDismiss} header="Events" content="Manage events and create new ones." />
      ) : null}
      <h2>My Events</h2>
    </>
  );
};

export default Events;
