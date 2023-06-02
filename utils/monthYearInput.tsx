// components/MonthYearInput/MonthYearInput.tsx

import React, { useState } from "react";
import { DateTime } from "luxon";

const MonthYearInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const [date, setDate] = useState(
    value ? DateTime.fromISO(value) : DateTime.now()
  );

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = date.set({ month: parseInt(event.target.value) });
    setDate(newDate);
    const isoDate = newDate.toISODate();
    if (isoDate) {
      onChange(isoDate.slice(0, 7));
    }
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = date.set({ year: parseInt(event.target.value) });
    setDate(newDate);
    const isoDate = newDate.toISODate();
    if (isoDate) {
      onChange(isoDate.slice(0, 7));
    }
  };

  return (
    <>
      <select value={date.month} onChange={handleMonthChange}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
          <option key={month} value={month}>
            {DateTime.fromObject({ month }).toFormat("LLL")}
          </option>
        ))}
      </select>
      <select value={date.year} onChange={handleYearChange}>
        {Array.from({ length: 11 }, (_, i) => i + date.year - 5).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};

export default MonthYearInput;
