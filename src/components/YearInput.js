
import React, { useState } from 'react';

const YearInput = ({ year, onYearChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newYear, setNewYear] = useState(year);

  const handleYearClick = () => setIsEditing(true);

  const handleYearChange = (e) => setNewYear(e.target.value);

  const handleYearBlur = () => {
    onYearChange(Number(newYear));
    setIsEditing(false);
  };

  return isEditing ? (
    <input
      id="year-input"
      type="number"
      value={newYear}
      onChange={handleYearChange}
      onBlur={handleYearBlur}
      autoFocus
    />
  ) : (
    <span id="year-display" onDoubleClick={handleYearClick}>
      {year}
    </span>
  );
};

export default YearInput;
