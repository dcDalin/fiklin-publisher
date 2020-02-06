import React, { useState } from 'react';
import { Tab, Form, Segment, Progress } from 'semantic-ui-react';
import styles from './Tours.module.scss';
import NewTourFormWrapper from './NewTourFormWrapper';

type FormData = {
  tourTitle: string;
  tourPhoto: string;
};

const NewTour: React.FC = () => {
  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextStep = (): any => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = (): any => {
    setStep(step - 1);
  };

  return (
    <Tab.Pane className={styles.tabWrapper}>
      <Form className={`${styles.customForm} ${styles.dashForm}`}>
        <Segment>
          <Progress value={step} total="7" attached="top" indicating />
          <NewTourFormWrapper step={step} nextStep={nextStep} prevStep={prevStep} />
          <Progress value={step} total="7" attached="bottom" indicating />
        </Segment>
      </Form>
    </Tab.Pane>
  );
};

export default NewTour;
