import React, { useState, useEffect } from 'react';

const ScientificNotationCalculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [isScientificNotation, setIsScientificNotation] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showExplanation2, setShowExplanation2] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [explanation2, setExplanation2] = useState('');

  useEffect(() => {
    // Update the explanation whenever outputValue changes
    setExplanation(getExplanation());
    setExplanation2(getExplanation2());
  }, [outputValue]);

  const handleInputChange = (e) => {
    // Replace "*" with "×" in the input value
    const sanitizedValue = e.target.value.replace(/\*/g, '×');
    setInputValue(sanitizedValue);
  };

  const handleToggle = () => {
    setIsScientificNotation(!isScientificNotation);
    setInputValue('');
    setOutputValue('');
    setExplanation('');
    setExplanation2('');
    setShowExplanation2(false);
  };

  const handleConversion = () => {
    if (isScientificNotation) {
      // Convert scientific notation to a regular number
      const parts = inputValue.match(/([\d.]+) ?× ?10\^(-?\d+)/);
      if (parts) {
        const coefficient = parseFloat(parts[1]);
        const exponent = parseInt(parts[2]);
        const regularNumber = coefficient * Math.pow(10, exponent);
  
        setOutputValue(regularNumber.toFixed(50)); // Use toFixed to ensure a fixed number of decimal places
        setExplanation(getExplanation());
        setExplanation2(getExplanation2());
      } else {
        setOutputValue('Invalid input');
        setExplanation('');
        setExplanation2('');
      }
    } else {
      // Convert a regular number to scientific notation
      if (!isNaN(inputValue)) {
        const convertedNumber = Number(inputValue);
        const exponent = Math.floor(Math.log10(Math.abs(convertedNumber)));
        const coefficient = convertedNumber / Math.pow(10, exponent);
        setOutputValue(`${coefficient.toFixed(50)} × 10^${exponent}`); // Use toFixed to ensure a fixed number of decimal places
        setExplanation(getExplanation());
        setExplanation2(getExplanation2());
      } else {
        setOutputValue('Invalid input');
        setExplanation('');
        setExplanation2('');
      }
    }
  };
  
  
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  const toggleExplanation2 = () => {
    setShowExplanation2(!showExplanation2);
  };

  const getExplanation = () => {
    if (isScientificNotation) {
      return `To convert scientific notation (e.g., ${inputValue}) to a regular number:
        1. Take the coefficient and exponent from the notation.
        2. Multiply the coefficient by 10 raised to the exponent.
        3. The result is the regular number: ${outputValue}`;
    } else {
      return (
        <div>
          <p>
            To convert a regular number (e.g., {inputValue}) to scientific notation:
          </p>
          <ol>
            <li>Find the exponent by determining the number's magnitude.</li>
            <li>Calculate the coefficient by dividing the number by 10 raised to the exponent.</li>
            <li>The result is the scientific notation: {outputValue}</li>
          </ol>
          <button
            type="button"
            onClick={toggleExplanation2}
            className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Still can't get it?
          </button>
        </div>
      );
    }
  };

  const getExplanation2 = () => {
    if (isScientificNotation) {
      // Explaining from scientific notation to regular number
      return `To convert scientific notation (e.g., ${inputValue}) to a regular number:
        1. Take the coefficient (${outputValue.split('×')[0]}) and count the zeros in the exponent.
        2. Multiply the coefficient by 10 raised to the number of zeros.
        3. The result is the regular number: ${outputValue}`;
    } else {
      // Explaining from a regular number to scientific notation
      const convertedNumber = Number(inputValue);
      const exponent = Math.floor(Math.log10(Math.abs(convertedNumber)));
      const coefficient = convertedNumber / Math.pow(10, exponent);
      return `To convert a regular number (e.g., ${inputValue}) to scientific notation:
        1. Determine the coefficient (${coefficient.toPrecision(1)}) and count the zeros to the right.
        2. Write the coefficient as "X" and the zeros as an exponent.
        3. The result is the scientific notation: ${coefficient.toPrecision(1)} × 10^${exponent}`;
    }
  };

  return (
    <form action="#" className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="input-value" className="block text-sm font-semibold leading-6 text-gray-900">
            {isScientificNotation ? 'Scientific Notation' : 'Regular Number'}
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="input-value"
              id="input-value"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="output-value" className="block text-sm font-semibold leading-6 text-gray-900">
            {isScientificNotation ? 'Regular Number' : 'Scientific Notation'}
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="output-value"
              id="output-value"
              autoComplete="output-value"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:-ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={outputValue}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleToggle}
        className="block w-full rounded-md bg-indigo-600 my-2.5 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Toggle Conversion
      </button>
      <button
        type="button"
        onClick={handleConversion}
        className="block w-full rounded-md bg-indigo-600 my-2.5 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Convert
      </button>
      <button
        type="button"
        onClick={toggleExplanation}
        className="block w-full rounded-md bg-indigo-600 my-2.5 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Show Explanation
      </button>
      {showExplanation && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Conversion Explanation 1</h3>
          {explanation}
        </div>
      )}
      {showExplanation2 && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Conversion Explanation 2</h3>
          {explanation2}
        </div>
      )}
    </form>
  );
};

export default ScientificNotationCalculator;
