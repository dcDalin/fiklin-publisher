import React from 'react';
import { Form, Button, Segment, Progress } from 'semantic-ui-react';
import TourPhotoModal from './TourPhotoModal';
import styles from '../Tours.module.scss';
import TourFormHeader from './TourFormHeader';

interface Props {
  nextStep: any;
  prevStep: any;
  step: any;
  tourNewInput: any;
  setTourNewInput: any;
}

const TourPhoto: React.FC<Props> = (props: Props) => {
  const { nextStep, prevStep, tourNewInput, setTourNewInput } = props;

  return (
    <>
      <div className={styles.topWrapper}>
        <TourFormHeader heading="Tour Poster" content="Add an image / poster of your tour" />
      </div>
      <Form.Field>
        <TourPhotoModal tourNewInput={tourNewInput} setTourNewInput={setTourNewInput} />
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

export default TourPhoto;
