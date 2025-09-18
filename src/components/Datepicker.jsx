import React, { useState, useMemo } from 'react';

export default function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : '';
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const calendarDays = useMemo(() => {
    const days = [];
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

    const prevMonthDays = daysInMonth(currentYear, currentMonth - 1);
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
        otherMonth: true,
      });
    }

    const thisMonthDays = daysInMonth(currentYear, currentMonth);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push({ date: new Date(currentYear, currentMonth, i), otherMonth: false });
    }

    const nextDays = 42 - days.length;
    for (let i = 1; i <= nextDays; i++) {
      days.push({ date: new Date(currentYear, currentMonth + 1, i), otherMonth: true });
    }

    return days;
  }, [currentMonth, currentYear]);

  const currentMonthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const toggleCalendar = () => setShowCalendar((s) => !s);
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const selectDate = (day) => {
    if (day.otherMonth) return;
    setSelectedDate(day.date);
    setShowCalendar(false);
  };

  const isSelected = (day) => selectedDate && day.date.toDateString() === selectedDate.toDateString();

  return (
    <div className="relative inline-block">
      <input
        type="text"
        readOnly
        value={formattedDate}
        onClick={toggleCalendar}
        placeholder="Select date"
        className="w-40 p-2 bg-gray-800 border border-gray-700 rounded cursor-pointer text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {showCalendar && (
        <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg z-50 p-4 text-white">
          <div className="flex justify-between items-center mb-2">
            <button onClick={prevMonth} className="p-1 hover:bg-gray-700 rounded text-white">&lt;</button>
            <span className="font-medium text-white">{currentMonthName} {currentYear}</span>
            <button onClick={nextMonth} className="p-1 hover:bg-gray-700 rounded text-white">&gt;</button>
          </div>

          <div className="grid grid-cols-7 text-center mb-1">
            {weekdays.map((day) => (
              <span key={day} className="font-semibold text-gray-300">{day}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 text-center">
            {calendarDays.map((day) => (
              <span
                key={day.date.toISOString()}
                onClick={() => selectDate(day)}
                className={`p-2 cursor-pointer rounded-full ${day.otherMonth ? 'text-gray-500' : 'text-gray-200 hover:bg-blue-600'} ${isSelected(day) ? 'bg-blue-500 text-white' : ''}`}
              >
                {day.date.getDate()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
