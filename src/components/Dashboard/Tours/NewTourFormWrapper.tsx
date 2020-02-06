import React, { useState, useEffect } from 'react';
import TourTitle from './NewTourForms/TourTitle';
import TourPhoto from './NewTourForms/TourPhoto';
import TourDescription from './NewTourForms/TourDescription';
import TourWhen from './NewTourForms/TourWhen';
import TourWhere from './NewTourForms/TourWhere';
import TourTicket from './NewTourForms/TourTicket';
import TourAdditionalInfo from './NewTourForms/TourAdditionalInfo';

interface Props {
  step: number;
  nextStep: any;
  prevStep: any;
}

const NewTourFormWrapper = (props: Props): any => {
  const { step, nextStep, prevStep } = props;
  const [tourNewInput, setTourNewInput] = useState({
    tourTitle: '',
    tourPhoto: '',
    tourPhotoURL: 'https://react.semantic-ui.com/images/wireframe/image.png',
    shortDescription: '',
    longDescription: '',
    category: [],
    when: {
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
    },
    where: {
      to: '',
      from: '',
    },
    highlights: [],
    includes: [],
    doesNotInclude: [],
    whatToBring: [],
    notSuitableFor: [],
    price: '',
  });

  useEffect(() => {
    const data = localStorage.getItem('newTour');

    if (data) {
      setTourNewInput(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('newTour', JSON.stringify(tourNewInput));
  });

  switch (step) {
    case 1:
      return (
        <TourTitle nextStep={nextStep} step={step} tourNewInput={tourNewInput} setTourNewInput={setTourNewInput} />
      );
    case 2:
      return (
        <TourPhoto
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
          tourNewInput={tourNewInput}
          setTourNewInput={setTourNewInput}
        />
      );
    case 3:
      return (
        <TourDescription
          nextStep={nextStep}
          prevStep={prevStep}
          tourNewInput={tourNewInput}
          setTourNewInput={setTourNewInput}
        />
      );
    case 4:
      return <TourWhen nextStep={nextStep} prevStep={prevStep} step={step} />;
    case 5:
      return <TourWhere nextStep={nextStep} prevStep={prevStep} step={step} />;
    case 6:
      return <TourTicket nextStep={nextStep} prevStep={prevStep} step={step} />;
    case 7:
      return <TourAdditionalInfo nextStep={nextStep} prevStep={prevStep} step={step} />;
    default:
      return (
        <TourTitle nextStep={nextStep} step={step} tourNewInput={tourNewInput} setTourNewInput={setTourNewInput} />
      );
  }
};

export default NewTourFormWrapper;
