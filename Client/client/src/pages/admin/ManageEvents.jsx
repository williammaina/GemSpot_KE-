import React, { useState } from 'react';
import { FaCalendarAlt, FaSearch, FaPlus, FaEdit, FaTrash, FaCheckCircle, FaClock } from 'react-icons/fa';

const ManageEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [publishFilter, setPublishFilter] = useState('all');

  const [events, setEvents] = useState([
    { id: 'e1', title: 'Nairobi Polo Club: Annual Tournament', date: 'Sat, Oct 25 • 3:00 PM', venue: 'Jamhuri Park', status: 'Published', category: 'Sports' },
    { id: 'e2', title: 'Blankets & Wine Festival', date: 'Sun, Nov 02 • 12:00 PM', venue: 'Ngong Racecourse', status: 'Published', category: 'Music' },
    { id: 'e3', title: 'Nairobi Restaurant Week Gala', date: 'Fri, Nov 15 • 7:00 PM', venue: 'Westlands', status: 'Draft', category: 'Eats' },
  ]);

  const filteredEvents = events.filter(ev => {
    const matchesSearch = ev.title.toLowerCase().includes(searchTerm.toLowerCase()) || ev.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = publishFilter === 'all' || ev.status.toLowerCase() === publishFilter.toLowerCase();
    return matchesSearch && matchesState;
  });

  const deleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <FaCalendarAlt size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-400">Events & Calendar Hub</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Manage Weekend Events</h1>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Publish weekend concerts, polo tournaments, and pop-up experiences with calendar emphasis.</p>
          </div>
        </div>
        <button className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2">
          <FaPlus size={12} /> Publish New Event
        </button>
      </div>

      {/* Filter Bar & Publish State Chips */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-4 rounded-2xl shadow">
        <div className="relative w-full sm:w-80">
          <FaSearch className="absolute left-4 top-3.5 text-neutral-500" size={14} />
          <input
            type="text"
            placeholder="Search event title or venue..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-11 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {['all', 'published', 'draft'].map((state) => (
            <button
              key={state}
              onClick={() => setPublishFilter(state)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                publishFilter === state
                  ? 'bg-amber-400 text-neutral-950 shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* Table Surface */}
      <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-950/60 text-[10px] uppercase tracking-wider font-extrabold text-neutral-400">
                <th className="py-4 px-6">Event Title</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Date & Schedule</th>
                <th className="py-4 px-6">Venue</th>
                <th className="py-4 px-6">Publish State</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80 text-xs">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((ev) => (
                  <tr key={ev.id} className="hover:bg-neutral-950/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">{ev.title}</td>
                    <td className="py-4 px-6 text-neutral-400">{ev.category}</td>
                    <td className="py-4 px-6 font-medium text-white flex items-center gap-1.5 pt-5">
                      <FaClock className="text-amber-400" size={11} /> {ev.date}
                    </td>
                    <td className="py-4 px-6 text-neutral-400">{ev.venue}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold inline-flex items-center gap-1 ${
                        ev.status === 'Published'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}>
                        {ev.status === 'Published' && <FaCheckCircle size={9} />}
                        {ev.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-xl bg-neutral-950 hover:bg-amber-500/20 text-neutral-400 hover:text-amber-400 border border-neutral-800 transition-colors" title="Edit Event">
                          <FaEdit size={12} />
                        </button>
                        <button onClick={() => deleteEvent(ev.id)} className="p-2 rounded-xl bg-neutral-950 hover:bg-rose-500/20 text-neutral-400 hover:text-rose-400 border border-neutral-800 transition-colors" title="Delete Event">
                          <FaTrash size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-neutral-500 text-xs">
                    No custom events published matching this state.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;