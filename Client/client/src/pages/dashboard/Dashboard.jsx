import React from 'react';
import { Link } from 'react-router-dom';
import { FaCompass, FaHeart, FaStar, FaUser, FaArrowRight, FaMapMarkedAlt, FaShieldAlt, FaCheckCircle, FaClock } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Saved Favorites', value: '4', change: '+1 this week', icon: <FaHeart />, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' },
    { label: 'Verified Reviews', value: '3', change: '5.0 avg rating', icon: <FaStar />, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
    { label: 'Spots Discovered', value: '12', change: 'Nairobi & Kilifi', icon: <FaMapMarkedAlt />, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
    { label: 'Explorer Tier', value: 'Level 3', change: 'Verified Member', icon: <FaShieldAlt />, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
  ];

  const quickLinks = [
    {
      title: 'Saved Favorites',
      desc: 'View your bookmarked Nairobi spots and hidden gems',
      path: '/profile/favorites',
      icon: <FaHeart />,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    },
    {
      title: 'My Verified Reviews',
      desc: 'Check your feedback and damage-for-two ratings on local spots',
      path: '/profile/my-reviews',
      icon: <FaStar />,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
    {
      title: 'Explorer Profile',
      desc: 'Update account credentials, security settings, and role info',
      path: '/profile',
      icon: <FaUser />,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
  ];

  const recentActivity = [
    { id: '101', type: 'Review', name: "CJ's Restaurant", time: '2 days ago', note: 'Rated 5.0 - Incredible ambiance and high-speed Wi-Fi.' },
    { id: '1', type: 'Favorite', name: 'Karura Forest', time: '5 days ago', note: 'Bookmarked for weekend nature escape.' },
    { id: '201', type: 'Review', name: 'Alchemist Bar', time: '2 weeks ago', note: 'Rated 4.8 - Electric Friday night crowd.' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20 font-sans">
      {/* Welcome Operational Banner */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-neutral-900 border border-emerald-500/30 p-8 rounded-3xl space-y-3 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="inline-flex p-3 rounded-2xl bg-emerald-400 text-neutral-950 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
          <FaCompass size={22} />
        </div>
        <div className="space-y-1 relative z-10">
          <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400">Operational Intelligence</span>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Welcome back, {user?.name || 'Explorer'}!</h1>
          <p className="text-neutral-300 text-xs sm:text-sm max-w-xl leading-relaxed">
            Manage your saved favorite spots, review contributions, and explore live Nairobi intelligence metrics.
          </p>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-5 rounded-3xl space-y-2 shadow-xl">
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-2xl border ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <span className="text-[10px] font-extrabold text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded-full border border-neutral-800">
                {stat.change}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 text-xs font-medium block">{stat.label}</span>
              <span className="text-2xl font-black text-white tracking-tight block pt-0.5">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Quick Access & Recent Activity Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Quick Access Portal Grid (2 columns span) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-base font-extrabold text-white tracking-tight uppercase">Quick Access Portals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quickLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 hover:border-emerald-500/50 p-6 rounded-3xl transition-all group space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`p-3.5 rounded-2xl w-fit border ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-sm group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>Access Portal</span>
                  <FaArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity Panel (1 column span) */}
        <div className="space-y-4">
          <h2 className="text-base font-extrabold text-white tracking-tight uppercase">Recent Activity Log</h2>
          <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-3xl space-y-4 shadow-xl">
            <div className="space-y-3">
              {recentActivity.map((act) => (
                <div key={act.id} className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <FaCheckCircle className="text-emerald-400" size={10} /> {act.name}
                    </span>
                    <span className="text-[10px] text-neutral-500 flex items-center gap-1">
                      <FaClock size={9} /> {act.time}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{act.note}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/profile" className="w-full py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-300 font-bold text-xs flex items-center justify-center gap-2 border border-neutral-800 transition-all">
                <span>View Full Explorer Profile</span>
                <FaArrowRight size={10} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;