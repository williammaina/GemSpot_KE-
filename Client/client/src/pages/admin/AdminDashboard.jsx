import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaMapMarkedAlt, FaCalendarAlt, FaUsers, FaExclamationTriangle, FaCheckCircle, FaArrowRight, FaPlus, FaTools } from 'react-icons/fa';

const AdminDashboard = () => {
  const kpis = [
    { label: 'Verified Places', value: '24', change: '+3 this week', icon: <FaMapMarkedAlt size={18} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
    { label: 'Active Events', value: '8', change: '2 ending soon', icon: <FaCalendarAlt size={18} />, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
    { label: 'Registered Explorers', value: '142', change: '+12 today', icon: <FaUsers size={18} />, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
    { label: 'Pending Moderation', value: '3', change: 'Requires review', icon: <FaExclamationTriangle size={18} />, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' },
  ];

  const recentSubmissions = [
    { id: '101', name: "CJ's Restaurant", type: 'Place', author: 'Admin System', status: 'Verified', date: '2 hrs ago' },
    { id: '201', name: 'Nairobi Polo Club Tournament', type: 'Event', author: 'Events Team', status: 'Published', date: '5 hrs ago' },
    { id: '102', name: 'Alchemist Rooftop Bar', type: 'Place', author: 'Business Owner', status: 'Pending Review', date: '1 day ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
            <FaShieldAlt size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-400">Master Control Panel</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Admin Dashboard</h1>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Monitor platform analytics, manage spots, events, users, and moderation blocks.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/admin/places" className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-1.5">
            <FaPlus size={11} /> Add Spot
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-3xl space-y-3 shadow-xl relative overflow-hidden group hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-2xl border ${kpi.bg} ${kpi.color}`}>
                {kpi.icon}
              </div>
              <span className="text-[10px] font-bold text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-full border border-neutral-800">
                {kpi.change}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 text-xs font-medium block">{kpi.label}</span>
              <span className="text-3xl font-black text-white tracking-tight block pt-1">{kpi.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Management Shortcuts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link to="/admin/places" className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-3xl space-y-3 hover:border-emerald-500/40 transition-all shadow-xl group">
          <div className="flex items-center justify-between text-emerald-400">
            <FaMapMarkedAlt size={20} />
            <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Manage Places</h3>
            <p className="text-neutral-400 text-xs pt-1">Add, edit, or verify Nairobi dining & nature spots.</p>
          </div>
        </Link>

        <Link to="/admin/events" className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-3xl space-y-3 hover:border-amber-500/40 transition-all shadow-xl group">
          <div className="flex items-center justify-between text-amber-400">
            <FaCalendarAlt size={20} />
            <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Manage Events</h3>
            <p className="text-neutral-400 text-xs pt-1">Publish weekend concerts, polo tournaments & pop-ups.</p>
          </div>
        </Link>

        <Link to="/admin/users" className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-3xl space-y-3 hover:border-blue-500/40 transition-all shadow-xl group">
          <div className="flex items-center justify-between text-blue-400">
            <FaUsers size={20} />
            <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Manage Users & Roles</h3>
            <p className="text-neutral-400 text-xs pt-1">Assign business owner or admin privileges.</p>
          </div>
        </Link>
      </div>

      {/* Moderation Block & Table Surface */}
      <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-8 rounded-3xl space-y-6 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h3 className="text-lg font-bold text-white">Recent Platform Submissions</h3>
            <p className="text-xs text-neutral-400">Review recent spots and events added across Kenya.</p>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Live Queue
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 text-[10px] uppercase tracking-wider font-extrabold text-neutral-400">
                <th className="pb-3 px-4">Name / Entity</th>
                <th className="pb-3 px-4">Type</th>
                <th className="pb-3 px-4">Submitted By</th>
                <th className="pb-3 px-4">Status</th>
                <th className="pb-3 px-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-xs">
              {recentSubmissions.map((item) => (
                <tr key={item.id} className="hover:bg-neutral-950/50 transition-colors">
                  <td className="py-4 px-4 font-bold text-white">{item.name}</td>
                  <td className="py-4 px-4 text-neutral-400">{item.type}</td>
                  <td className="py-4 px-4 text-neutral-400">{item.author}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                      item.status === 'Verified' || item.status === 'Published'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-neutral-500 font-medium">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;