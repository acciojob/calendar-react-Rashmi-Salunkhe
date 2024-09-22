import React from 'react';

const NavigationButtons = ({ onMonthNavigation, onYearNavigation }) => {
  return (
    <div id="navigation-buttons">
      <button id="prev-month" onClick={() => onMonthNavigation(-1)}>Previous Month</button>
      <button id="next-month" onClick={() => onMonthNavigation(1)}>Next Month</button>
      <button id="prev-year" onClick={() => onYearNavigation(-1)}>Previous Year</button>
      <button id="next-year" onClick={() => onYearNavigation(1)}>Next Year</button>
    </div>
  );
};

export default NavigationButtons;
