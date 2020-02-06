import React from 'react';
import { Form, Button, Segment, Progress } from 'semantic-ui-react';
import styles from '../Tours.module.scss';

interface Props {
  nextStep: any;
  prevStep: any;
  step: any;
}

const TourAdditionalInfo: React.FC<Props> = (props: Props) => {
  const { nextStep, prevStep, step } = props;
  return (
    <>
      <h2 className={styles.dashSubHeading}>Additional Information</h2>
      <Form.Field>
        <label>Short Description</label>
        <input placeholder="A catchy title" />
      </Form.Field>
      <Form.Field>
        <label>Long Description</label>
        <input placeholder="A catchy title" />
      </Form.Field>
      <Form.Field>
        <Button circular basic onClick={prevStep}>
          Prev
        </Button>
        <Button circular basic>
          Finish
        </Button>
      </Form.Field>
    </>
  );
};

export default TourAdditionalInfo;
