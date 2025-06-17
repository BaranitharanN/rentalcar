'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function BookingCalendar({ onBooking }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleBooking = () => {
    if (startDate && endDate) {
      onBooking(startDate, endDate);
      setStartDate(null);
      setEndDate(null);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md bg-white max-w-md">
      <h2 className="text-xl font-semibold mb-2">Book a Car</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
        className="p-2 border rounded w-full mb-2"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
        className="p-2 border rounded w-full mb-2"
      />
      <button
        onClick={handleBooking}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Book Now
      </button>
    </div>
  );
}
