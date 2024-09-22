import React from 'react';

const MonthDropdown = ({ months, selectedMonth, onMonthChange }) => {
  return (
    <select
      id="month-dropdown"
      value={selectedMonth}
      onChange={(e) => onMonthChange(Number(e.target.value))}
    >
      {months.map((month, index) => (
        <option key={index} value={index}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default MonthDropdown;
