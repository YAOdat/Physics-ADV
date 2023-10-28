import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ScientificNotationCalculator from './calculators/ScientificNotationCalculator';
import HookeLaw from './calculators/HookeLaw';

const Calculator = () => {
  const { lessonNumber } = useParams();
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [isScientificNotation, setIsScientificNotation] = useState(false);

  let calculatorComponent;

  switch (lessonNumber) {
    case '2':
      calculatorComponent = <ScientificNotationCalculator />;
      break;
    case 'G10T1CH1L1':
      calculatorComponent = <HookeLaw />;
      break;
    // Add cases for other lessons as needed.
    default:
      calculatorComponent = <div>Lesson not found</div>;
      break;
  }

  return (
    <div>
      <h2>Calculator for Lesson {lessonNumber}</h2>
      {calculatorComponent}
    </div>
  );
};

export default Calculator;