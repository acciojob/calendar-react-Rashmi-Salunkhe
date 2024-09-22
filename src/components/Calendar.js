import React, { useState, useEffect } from 'react';
import MonthDropdown from './MonthDropdown';
import YearInput from './YearInput';
import NavigationButtons from './NavigationButtons';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: getDaysInMonth(selectedMonth, selectedYear) }, (_, i) => i + 1);

  const handleMonthChange = (month) => setSelectedMonth(month);

  const handleYearChange = (year) => setSelectedYear(year);

  const handleMonthNavigation = (direction) => {
    setSelectedMonth((prevMonth) => {
      const newMonth = (prevMonth + direction + 12) % 12;
      return newMonth;
    });
  };

  const handleYearNavigation = (direction) => {
    setSelectedYear((prevYear) => prevYear + direction);
  };

  return (
    <div id="calendar">
      <h1 id="calendar-heading">Calendar</h1>
      <MonthDropdown
        months={months}
        selectedMonth={selectedMonth}
        onMonthChange={handleMonthChange}
      />
      <YearInput
        year={selectedYear}
        onYearChange={handleYearChange}
      />
      <NavigationButtons
        onMonthNavigation={handleMonthNavigation}
        onYearNavigation={handleYearNavigation}
      />
      <table id="days-table">
        <thead>
          <tr>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {days.map((day) => (
              <td key={day}>{day}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
