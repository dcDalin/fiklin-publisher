import React from 'react';
import { Popup, Button } from 'semantic-ui-react';
import styles from '../Tours.module.scss';

interface Props {
  heading: string;
  content: string;
}

const TourFormHeader: React.FC<Props> = (props: Props) => {
  const { heading, content } = props;
  return (
    <>
      <h2 className={styles.dashSubHeading}>{heading}</h2>
      <Popup
        trigger={<Button basic icon="question circle" className={styles.popupInfo} />}
        content={content}
        inverted
        size="mini"
        wide
        position="top right"
      />
    </>
  );
};

export default TourFormHeader;
