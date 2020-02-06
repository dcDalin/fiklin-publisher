import React, { useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import styles from '../Tours.module.scss';
import TourFormHeader from './TourFormHeader';

interface Props {
  nextStep: () => {};
  step?: number;
  tourNewInput: any;
  setTourNewInput: any;
}

type FormData = {
  tourTitle: string;
};

const TourTitle: React.FC<Props> = (props: Props) => {
  const { nextStep, tourNewInput, setTourNewInput } = props;
  const { tourTitle } = tourNewInput;

  const { register, handleSubmit, errors } = useForm<FormData>();

  useEffect(() => {
    register(
      { name: 'tourTitle' },
      {
        required: true,
        minLength: 10,
        maxLength: 25,
      },
    );
  }, [register]);

  const handleChange = (event: any): any => {
    setTourNewInput({ ...tourNewInput, tourTitle: event.target.value });
  };

  const onSubmit = handleSubmit(({ tourTitle }) => {
    console.log('Tour Title is: ', tourTitle);
    nextStep();
  });

  return (
    <>
      <div className={styles.topWrapper}>
        <TourFormHeader heading="Tout Title" content="Catchy title for your tour" />
      </div>
      <form onSubmit={onSubmit}>
        <Form.Field>
          <label>Tour Title</label>
          <input
            name="tourTitle"
            value={tourTitle}
            ref={register({
              required: true,
              minLength: 10,
              maxLength: 25,
            })}
            onChange={handleChange}
          />
          {errors.tourTitle && errors.tourTitle.type === 'required' && <p>Tour title is required</p>}
          {errors.tourTitle && errors.tourTitle.type === 'minLength' && (
            <p>Tour title should be at least 10 characters long</p>
          )}
          {errors.tourTitle && errors.tourTitle.type === 'maxLength' && <p>Tour title is too long</p>}
        </Form.Field>
        <Form.Field>
          <Button circular basic type="submit" disabled={!!errors.tourTitle}>
            Next
          </Button>
        </Form.Field>
      </form>
    </>
  );
};

export default TourTitle;
