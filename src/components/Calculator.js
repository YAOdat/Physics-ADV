import React from 'react';

const Calculator = ({ lessonNumber }) => {
  // Use the lessonNumber prop to display the calculator for the selected lesson
  console.log(lessonNumber)
  return (
    <div>
      <h2>Calculator for Lesson {lessonNumber}</h2>
      {/* Add your calculator components here */}
    </div>
  );
};

export default Calculator;
