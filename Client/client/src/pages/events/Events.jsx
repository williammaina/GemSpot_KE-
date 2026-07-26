import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaFire, FaClock, FaArrowRight } from 'react-icons/fa';

const Events = () => {
  const [events] = useState([
    { 
      id: 'e1', 
      title: 'Nairobi Restaurant Week Showcase', 
      date: 'Sat, Aug 1', 
      time: '10:00 AM Onwards',
      location: 'Various Nairobi Venues', 
      category: 'Culinary Showcase',
      price: 'KES 2,500/-',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop' 
    },
    { 
      id: 'e2', 
      title: 'Ngong Hills Sunrise Sunset Hike', 
      date: 'Sun, Aug 2', 
      time: '6:30 AM - 2:00 PM',
      location: 'Ngong Hills, Nairobi', 
      category: 'Outdoor & Adventure',
      price: 'KES 1,200/-',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop' 
    },
  ]);

  return (
    <div className="space-y-10 pb-16">
      {/* Amber Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <FaCalendarAlt size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-400 flex items-center gap-1.5">
              <FaFire className="text-amber-400 animate-pulse" /> Happening Soon
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Upcoming Weekend Events</h1>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Verified festivals, night concerts, culinary showcases, and outdoor meetups across Kenya.</p>
          </div>
        </div>
      </div>

      {/* Featured Callout Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
            Featured Highlight
          </span>
          <h2 className="text-xl font-extrabold text-white">Nairobi Weekend Pass & Calendar Sync</h2>
          <p className="text-white/60 text-xs max-w-xl">Sync events directly to your personal Google Calendar to never miss out on top curated weekend highlights.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-4 py-2.5 rounded-2xl border border-amber-400/20">
            {events.length} Active Events Listed
          </span>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((ev) => (
          <Link 
            key={ev.id} 
            to={`/events/${ev.id}`} 
            className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden group hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col hover:-translate-y-1"
          >
            <div className="relative h-56 w-full overflow-hidden bg-slate-950">
              <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Date Block Chip */}
              <div className="absolute top-4 left-4 bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-2xl text-xs font-extrabold shadow-lg flex items-center gap-1.5">
                <FaCalendarAlt size={11} />
                <span>{ev.date}</span>
              </div>

              <span className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full text-[10px] font-extrabold shadow-lg">
                {ev.category}
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-white font-extrabold text-base group-hover:text-amber-400 transition-colors leading-snug">{ev.title}</h3>
                <div className="space-y-1">
                  <p className="text-white/60 text-xs flex items-center gap-1.5 font-medium">
                    <FaMapMarkerAlt size={11} className="text-rose-400 shrink-0" />
                    <span className="truncate">{ev.location}</span>
                  </p>
                  <p className="text-white/50 text-xs flex items-center gap-1.5 font-medium">
                    <FaClock size={11} className="text-amber-400 shrink-0" />
                    <span>{ev.time}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                <span className="text-xs font-extrabold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                  {ev.price}
                </span>
                <span className="text-xs font-extrabold text-white/70 group-hover:text-amber-400 flex items-center gap-1 transition-colors">
                  <span>Inspect Event</span>
                  <FaArrowRight size={10} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;