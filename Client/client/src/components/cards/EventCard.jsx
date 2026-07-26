import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarPlus,
  FaBolt,
} from "react-icons/fa";

const EventCard = ({ event }) => {
  const {
    id = "1",
    title = "Nairobi Polo Club: Annual Tournament",
    banner = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    date = "Sat, Oct 25",
    time = "3:00 PM Onwards",
    location = "Jamhuri Park, Nairobi",
    price = "KES 1,500/- Entry",
    tag = "This Weekend",
  } = event || {};

  const handleAddToCalendar = (e) => {
    e.preventDefault();
    alert(`Syncing "${title}" to Google Calendar...`);
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-slate-950/70 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_0_1px_rgba(245,158,11,0.20),0_18px_45px_rgba(0,0,0,0.38)]">
      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={banner}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-95"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1 text-[11px] font-semibold text-amber-200 backdrop-blur-md">
            <FaBolt className="text-[10px]" />
            {tag}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
          {price}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-3">
          <Link to={`/events/${id}`} className="block">
            <h3 className="line-clamp-2 text-xl font-extrabold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-amber-200">
              {title}
            </h3>
          </Link>

          <div className="grid gap-2 text-sm text-white/72">
            <p className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
                <FaCalendarAlt className="text-xs" />
              </span>
              <span>{date}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
                <FaClock className="text-xs" />
              </span>
              <span>{time}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/10 text-rose-300">
                <FaMapMarkerAlt className="text-xs" />
              </span>
              <span className="truncate">{location}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-white/8 pt-4">
          <button
            onClick={handleAddToCalendar}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/15 transition-all duration-300 hover:brightness-110 hover:shadow-amber-500/25 active:scale-[0.99]"
          >
            <FaCalendarPlus className="text-sm" />
            <span>Add to Google Calendar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;