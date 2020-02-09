/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
// @ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from '../Tours.module.scss';
import TourFormHeader from './TourFormHeader';

interface Props {
  nextStep: () => {};
  prevStep: () => {};
  tourNewInput: any;
  setTourNewInput: any;
}

type FormData = {
  shortDescription: string;
  longDescription: string;
};

const TourDescription: React.FC<Props> = (props: Props) => {
  const { nextStep, prevStep, tourNewInput, setTourNewInput } = props;
  const { shortDescription, longDescription } = tourNewInput;

  const { register, handleSubmit, errors } = useForm<FormData>();

  const handleChange = (event: any): any => {
    setTourNewInput({ ...tourNewInput, shortDescription: event.target.value });
  };

  const onChange = (_event: any, editor: any): any => {
    const data = editor.getData();
    setTourNewInput({ ...tourNewInput, longDescription: data });
  };

  const onSubmit = handleSubmit(({ shortDescription }) => {
    nextStep();
  });

  return (
    <>
      <div className={styles.topWrapper}>
        <TourFormHeader heading="Tour Info" content="Write a short and a detailed description of your tour" />
      </div>
      <form onSubmit={onSubmit}>
        <Form.Field>
          <label>Short Description</label>
          <input
            name="shortDescription"
            value={shortDescription}
            ref={register({
              required: true,
              minLength: 10,
              maxLength: 25,
            })}
            onChange={handleChange}
          />
          {errors.shortDescription && errors.shortDescription.type === 'required' && (
            <p>Short description is required</p>
          )}
          {errors.shortDescription && errors.shortDescription.type === 'minLength' && (
            <p>Short description should be at least 10 characters long</p>
          )}
          {errors.shortDescription && errors.shortDescription.type === 'maxLength' && (
            <p>Short description is too long</p>
          )}
        </Form.Field>
        <Form.Field>
          <label>Long Description</label>
          <div className={styles.ckEditorWrapper}>
            <CKEditor editor={ClassicEditor} onChange={onChange} data={longDescription} />
          </div>
        </Form.Field>
        <Form.Field>
          <Button circular basic onClick={prevStep}>
            Prev
          </Button>
          <Button circular basic type="submit" disabled={!!errors.shortDescription}>
            Next
          </Button>
        </Form.Field>
      </form>
    </>
  );
};

export default TourDescription;
