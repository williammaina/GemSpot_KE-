import React from 'react';
import { FaCalendarPlus } from 'react-icons/fa';

const CalendarButton = ({ eventTitle = "Nairobi Weekend Event", eventDate = "2026-10-25T15:00:00" }) => {
  const handleAddToCalendar = () => {
    // Simulated Google Calendar Sync Web Intent Pipeline
    const encodedTitle = encodeURIComponent(eventTitle);
    const cleanDate = eventDate.replace(/[-:]/g, '');
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${cleanDate}/${cleanDate}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleAddToCalendar}
      className="w-full flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-3.5 px-5 rounded-2xl text-xs transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 cursor-pointer backdrop-blur-md"
    >
      <FaCalendarPlus size={16} className="text-slate-950" />
      <span>Add to Google Calendar</span>
    </button>
  );
};

export default CalendarButton;