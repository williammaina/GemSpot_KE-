import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FaUser, FaShieldAlt, FaHeart, FaStar, FaCompass, FaBookmark, FaCog, FaArrowRight } from 'react-icons/fa';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Simulated dashboard stats and recent activity data
  const stats = {
    favoritesCount: 4,
    reviewsCount: 3,
    explorerScore: 'Level 3 Explorer',
    savedGuides: 2
  };

  const recentActivity = [
    { id: '101', type: 'Review', name: "CJ's Restaurant", date: '2 days ago', note: 'Rated 5.0 - Incredible ambiance and high-speed Wi-Fi.' },
    { id: '1', type: 'Favorite', name: 'Karura Forest', date: '5 days ago', note: 'Bookmarked for weekend nature escape.' },
    { id: '201', type: 'Review', name: 'Alchemist Bar', date: '2 weeks ago', note: 'Rated 4.8 - Electric Friday night crowd.' }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      {/* Personal Dashboard Header / Avatar Block */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-emerald-500/20 p-8 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center text-slate-950 font-black text-3xl justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)] border-2 border-emerald-300">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'E'}
            </div>
            <span className="absolute -bottom-1 -right-1 bg-emerald-400 text-slate-950 p-1 rounded-lg text-[10px] font-extrabold shadow">
              PRO
            </span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{user?.name || 'Explorer Pro'}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/30">
                {stats.explorerScore}
              </span>
            </div>
            <p className="text-neutral-400 text-xs font-medium">{user?.email || 'explorer@gemspotke.co.ke'}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <span className="px-4 py-2 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-xs font-bold text-emerald-400 flex items-center gap-1.5 shadow-inner">
            <FaShieldAlt /> {user?.role || 'Verified Member'}
          </span>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Link to="/profile/favorites" className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-5 rounded-2xl space-y-1 hover:border-emerald-500/40 transition-all shadow-lg group">
          <div className="flex items-center justify-between text-rose-400">
            <FaHeart size={16} />
            <span className="text-xs font-bold text-neutral-500 group-hover:text-emerald-400 transition-colors">View All →</span>
          </div>
          <span className="text-2xl font-black text-white block pt-1">{stats.favoritesCount}</span>
          <span className="text-[11px] text-neutral-400 font-medium">Saved Favorites</span>
        </Link>

        <Link to="/profile/reviews" className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-5 rounded-2xl space-y-1 hover:border-emerald-500/40 transition-all shadow-lg group">
          <div className="flex items-center justify-between text-amber-400">
            <FaStar size={16} />
            <span className="text-xs font-bold text-neutral-500 group-hover:text-emerald-400 transition-colors">View All →</span>
          </div>
          <span className="text-2xl font-black text-white block pt-1">{stats.reviewsCount}</span>
          <span className="text-[11px] text-neutral-400 font-medium">Verified Reviews</span>
        </Link>

        <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-5 rounded-2xl space-y-1 shadow-lg">
          <div className="text-blue-400">
            <FaCompass size={16} />
          </div>
          <span className="text-2xl font-black text-white block pt-1">12</span>
          <span className="text-[11px] text-neutral-400 font-medium">Spots Discovered</span>
        </div>

        <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-5 rounded-2xl space-y-1 shadow-lg">
          <div className="text-emerald-400">
            <FaBookmark size={16} />
          </div>
          <span className="text-2xl font-black text-white block pt-1">{stats.savedGuides}</span>
          <span className="text-[11px] text-neutral-400 font-medium">Curated Guides</span>
        </div>
      </div>

      {/* Tabs / Sections */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-neutral-800 max-w-md">
          {['overview', 'activity', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold capitalize transition-all ${
                activeTab === tab
                  ? 'bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">Recent Activity</h3>
                <Link to="/profile/reviews" className="text-xs text-emerald-400 font-bold hover:underline">See all reviews</Link>
              </div>
              <div className="space-y-3">
                {recentActivity.map((act, i) => (
                  <div key={i} className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">{act.name}</span>
                      <span className="text-[10px] text-neutral-500">{act.date}</span>
                    </div>
                    <p className="text-xs text-neutral-400">{act.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white">Quick Shortcuts</h3>
                <div className="space-y-2">
                  <Link to="/profile/favorites" className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 text-xs text-white font-semibold transition-all">
                    <span>Manage Bookmarked Favorites</span>
                    <FaArrowRight size={11} className="text-emerald-400" />
                  </Link>
                  <Link to="/profile/reviews" className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 text-xs text-white font-semibold transition-all">
                    <span>View Verified User Reviews</span>
                    <FaArrowRight size={11} className="text-emerald-400" />
                  </Link>
                  <Link to="/explore/nature" className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 text-xs text-white font-semibold transition-all">
                    <span>Explore New Weekend Spots</span>
                    <FaArrowRight size={11} className="text-emerald-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-8 rounded-3xl space-y-4 shadow-xl">
            <h3 className="text-sm font-bold text-white">Full Explorer History</h3>
            <p className="text-xs text-neutral-400">All your interactions, check-ins, and verified ratings are logged here securely.</p>
            <div className="space-y-3 pt-2">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-neutral-950/80 rounded-2xl border border-neutral-800 text-xs">
                  <div>
                    <span className="font-extrabold text-white block">{act.name}</span>
                    <span className="text-neutral-400">{act.note}</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-bold px-2.5 py-1 rounded-full bg-neutral-900">{act.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-8 rounded-3xl space-y-6 shadow-xl">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white">Account Preferences</h3>
              <p className="text-xs text-neutral-400">Manage your notification alerts, regional preferences, and security settings.</p>
            </div>
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-4 bg-neutral-950/80 rounded-2xl border border-neutral-800 text-xs">
                <div>
                  <span className="font-bold text-white block">Email Notification Alerts</span>
                  <span className="text-neutral-400">Receive weekly curated Nairobi weekend event guides.</span>
                </div>
                <input type="checkbox" defaultChecked className="accent-emerald-400 w-4 h-4 cursor-pointer" />
              </div>
              <div className="flex items-center justify-between p-4 bg-neutral-950/80 rounded-2xl border border-neutral-800 text-xs">
                <div>
                  <span className="font-bold text-white block">Location Tracking</span>
                  <span className="text-neutral-400">Enable GPS-based proximity recommendations.</span>
                </div>
                <input type="checkbox" defaultChecked className="accent-emerald-400 w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;