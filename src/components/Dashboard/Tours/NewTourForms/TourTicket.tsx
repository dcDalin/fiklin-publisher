import React from 'react';
import { Form, Button, Segment, Progress } from 'semantic-ui-react';
import styles from '../Tours.module.scss';

interface Props {
  nextStep: any;
  prevStep: any;
  step: any;
}

const TourTicket: React.FC<Props> = (props: Props) => {
  const { nextStep, prevStep, step } = props;
  return (
    <>
      <h2 className={styles.dashSubHeading}>Tickets</h2>
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
        <Button circular basic onClick={nextStep}>
          Next
        </Button>
      </Form.Field>
    </>
  );
};

export default TourTicket;
