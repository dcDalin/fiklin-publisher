import React from 'react';
import { Form, Button, Segment, Progress } from 'semantic-ui-react';
import styles from '../Tours.module.scss';

interface Props {
  nextStep: any;
  prevStep: any;
  step: any;
}

const TourWhen: React.FC<Props> = (props: Props) => {
  const { nextStep, prevStep, step } = props;
  return (
    <>
      <h2 className={styles.dashSubHeading}>When</h2>
      <Form.Field>
        <label>Start Date</label>
        <input placeholder="A catchy title" />
      </Form.Field>
      <Form.Field>
        <label>End Date</label>
        <input placeholder="A catchy title" />
      </Form.Field>
      <Form.Field>
        <Button circular basic onClick={prevStep}>
          Prev
        </Button>
        <Button circular basic onClick={nextStep}>
          Next
        </Button>
      </Form.Field>
    </>
  );
};

export default TourWhen;
