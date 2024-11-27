import React, { useState } from 'react';

const DateOfBirthPicker = ({ form, setForm, errors }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDateChange = () => {
    if (day && month && year) {
      setForm({
        ...form,
        DateOfBirth: `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`,
      });
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());

  return (
    <div>
      <label className="block font-semibold mb-2">Date Of Birth:</label>
      <div className="flex space-x-2">
        <select
          className="border border-indigo-500 p-2 rounded-md"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
            handleDateChange();
          }}
          required
        >
          <option value="">Day</option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          className="border border-indigo-500 p-2 rounded-md"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
            handleDateChange();
          }}
          required
        >
          <option value="">Month</option>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select
          className="border border-indigo-500 p-2 rounded-md"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            handleDateChange();
          }}
          required
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      {errors.DateOfBirth && <p className="text-red-500 text-sm">{errors.DateOfBirth}</p>}
    </div>
  );
};

export default DateOfBirthPicker;
