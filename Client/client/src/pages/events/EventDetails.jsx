import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaGoogle, FaArrowLeft, FaClock, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { generateGoogleCalendarUrl } from '../../utils/helpers';

const EventDetails = () => {
  const { id } = useParams();
  
  // Simulated event payload matching ID
  const event = {
    title: 'Nairobi Restaurant Week Showcase',
    date: '2026-08-01T10:00:00Z',
    displayDate: 'Saturday, August 1, 2026',
    time: '10:00 AM - 11:00 PM EAT',
    location: 'Village Market, Gigiri, Nairobi',
    price: 'KES 2,500/- Access Pass',
    description: 'Experience exclusive multi-course tasting menus, signature drink pairings, and special discounts across top Nairobi eateries and gastro-lounges. Join fellow food enthusiasts for a premier culinary celebration.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop'
  };

  const gCalUrl = generateGoogleCalendarUrl(event.title, event.date, event.location, event.description);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Back Link */}
      <div>
        <Link to="/events" className="inline-flex items-center gap-2 text-xs font-extrabold text-white/60 hover:text-amber-400 transition-colors bg-slate-900/80 px-4 py-2 rounded-2xl border border-white/8 backdrop-blur-md">
          <FaArrowLeft size={12} />
          <span>Back to All Events</span>
        </Link>
      </div>

      {/* Cinematic Event Hero */}
      <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute top-4 left-4 bg-amber-400 text-slate-950 px-4 py-1.5 rounded-full text-xs font-extrabold shadow-lg">
          Verified Event
        </div>
        <div className="absolute bottom-6 left-6 right-6 space-y-2">
          <span className="bg-amber-500/20 border border-amber-500/30 text-amber-300 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider inline-block">
            {event.price}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{event.title}</h1>
        </div>
      </div>

      {/* Main Details & CTA Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-900/90 backdrop-blur-md border border-white/10 p-8 rounded-3xl space-y-6 shadow-xl">
          <div className="space-y-4 pb-6 border-b border-white/8">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-amber-400">Event Overview</h3>
            <p className="text-white/80 text-sm leading-relaxed">{event.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-amber-400">Schedule & Logistics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-[10px] text-white/50 uppercase font-bold flex items-center gap-1.5">
                  <FaCalendarAlt className="text-amber-400" /> Date
                </span>
                <p className="text-xs font-extrabold text-white">{event.displayDate}</p>
              </div>
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-[10px] text-white/50 uppercase font-bold flex items-center gap-1.5">
                  <FaClock className="text-emerald-400" /> Time Window
                </span>
                <p className="text-xs font-extrabold text-white">{event.time}</p>
              </div>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-white/5 space-y-1">
              <span className="text-[10px] text-white/50 uppercase font-bold flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-rose-400" /> Venue Location
              </span>
              <p className="text-xs font-extrabold text-white">{event.location}</p>
            </div>
          </div>
        </div>

        {/* Sidebar Calendar & Ticket Action Card */}
        <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-6 rounded-3xl space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-amber-400">Calendar Integration</h3>
            <p className="text-white/60 text-xs leading-relaxed">Secure your schedule by syncing this event directly with your Google Calendar.</p>
            
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-white/80 font-bold">
                <FaCheckCircle className="text-emerald-400" /> Instant Sync Web Intent
              </div>
              <div className="flex items-center gap-2 text-xs text-white/80 font-bold">
                <FaShieldAlt className="text-amber-400" /> Verified Location Data
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={gCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] cursor-pointer hover:-translate-y-0.5"
            >
              <FaGoogle size={15} />
              <span>Add to Google Calendar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;