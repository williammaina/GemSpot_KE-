import React from 'react';
import { Link } from 'react-router-dom';
import { FaCompass, FaTree, FaUtensils, FaGlassCheers, FaRunning, FaArrowRight, FaFire, FaCalendarAlt, FaStar, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';
import MapView from '../components/map/MapView';
import { useWeather } from '../hooks/useWeather';

const Home = () => {
  const { weatherData } = useWeather();

  const categories = [
    { title: 'Nature & Outdoor', path: '/explore/nature', icon: FaTree, desc: 'Karura, Ngong Hills, Rift Valley hikes' },
    { title: 'Eats & Cafes', path: '/explore/eats', icon: FaUtensils, desc: 'CJ\'s, Artcaffé, hidden coffee gems' },
    { title: 'Nightlife & Vibes', path: '/explore/nightlife', icon: FaGlassCheers, desc: 'Westlands lounges, rooftop clubs' },
    { title: 'Action & Adventures', path: '/explore/action', icon: FaRunning, desc: 'Go-karting, quad biking, paintball' },
  ];

  const featuredDiscoveries = [
    { id: '1', name: "CJ's Restaurant", location: "Village Market, Gigiri", damage: "KES 5,500/- for two", rating: 4.8, category: "Café & Eats", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" },
    { id: '2', name: "Karura Forest Trails", location: "Limuru Road, Nairobi", damage: "KES 600/- Entry", rating: 4.9, category: "Nature & Outdoor", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80" },
    { id: '3', name: "Mercado Mexican Kitchen", location: "Westlands, Nairobi", damage: "KES 6,000/- for two", rating: 4.7, category: "Nightlife & Dining", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" },
  ];

  const weekendEvents = [
    { id: 'e1', title: "Nairobi Rooftop Jazz & Wine Night", date: "Sat, Oct 28 • 6:00 PM", location: "Upperhill", price: "KES 2,500/-" },
    { id: 'e2', title: "Karura Forest Morning Nature Walk", date: "Sun, Oct 29 • 9:00 AM", location: "Gate A, Karura", price: "KES 1,000/-" },
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/30 px-4 py-2 rounded-full text-xs font-extrabold text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <FaCompass className="animate-spin-slow text-emerald-400" />
            <span>Kenya's Premier Local Intelligence & Spot Directory</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Discover the Best Hidden <span className="text-emerald-400 underline decoration-emerald-500/30 decoration-wavy">Gems</span> Across Kenya.
          </h1>
          
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            Real-time damage-for-two cost estimates, verified M-Pesa till statuses, live crowd metrics, weather advisories, and curated weekend vibes.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-3">
            <Link
              to="/explore/nature"
              className="px-7 py-3.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] flex items-center gap-2 hover:-translate-y-0.5"
            >
              <span>Explore Spots Now</span>
              <FaArrowRight size={12} />
            </Link>
            <Link
              to="/events"
              className="px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-md shadow-lg hover:-translate-y-0.5"
            >
              View Weekend Events
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400">Curated Discovery</span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Explore Categories</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.path}
                to={cat.path}
                className="bg-slate-900/80 hover:bg-slate-900 border border-white/8 hover:border-emerald-400/40 p-6 rounded-3xl transition-all duration-300 group space-y-4 shadow-xl backdrop-blur-md hover:-translate-y-1"
              >
                <div className="p-3.5 rounded-2xl bg-emerald-400/10 text-emerald-400 w-fit group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all duration-300 border border-emerald-400/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <Icon size={22} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-white font-extrabold text-sm group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    <span>{cat.title}</span>
                    <FaArrowRight className="text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all text-xs" />
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed">{cat.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Discoveries Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-400">Handpicked Excellence</span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <FaFire className="text-amber-400" /> Featured Discoveries
            </h2>
          </div>
          <Link to="/explore/all" className="text-xs font-extrabold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors">
            <span>View All Spots</span>
            <FaArrowRight size={10} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDiscoveries.map((spot) => (
            <div key={spot.id} className="bg-slate-900/80 backdrop-blur-md border border-white/8 rounded-3xl overflow-hidden shadow-xl group hover:border-white/20 transition-all duration-300 flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-white/10 text-amber-400 px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1 shadow-lg">
                  <FaStar size={10} /> {spot.rating}
                </span>
                <span className="absolute bottom-3 left-3 bg-emerald-400 text-slate-950 px-3 py-1 rounded-full text-[10px] font-extrabold shadow-lg">
                  {spot.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h3 className="text-white font-extrabold text-base group-hover:text-emerald-400 transition-colors">{spot.name}</h3>
                  <p className="text-white/60 text-xs flex items-center gap-1">
                    <FaMapMarkerAlt className="text-rose-400 text-[10px]" /> {spot.location}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/8">
                  <span className="text-amber-400 text-xs font-bold flex items-center gap-1">
                    <FaCreditCard className="text-[10px]" /> {spot.damage}
                  </span>
                  <Link to={`/places/${spot.id}`} className="px-4 py-2 rounded-xl bg-white/10 hover:bg-emerald-400 hover:text-slate-950 text-white font-bold text-xs transition-all">
                    Inspect
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Intelligence Map Section */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400">Real-Time GPS Mapping</span>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Live Intelligence Map</h2>
          <p className="text-xs text-white/60">Live coordinates and verified venue mapping across Nairobi and environs</p>
        </div>
        <MapView />
      </section>

      {/* Weekend Recommendations & Event Preview Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekend Recommendations */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-white/8 rounded-3xl p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-400">Curated Plan</span>
              <h3 className="text-lg font-extrabold text-white">Weekend Recommendations</h3>
            </div>
            <span className="bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3 py-1 rounded-full text-xs font-bold">
              Top Picks
            </span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">
            Looking for the ideal escape this weekend? Combine a morning trek through Karura Forest with brunch at Village Market or an evening jazz session in Upperhill.
          </p>
          <div className="pt-2">
            <Link to="/explore/nature" className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-400 hover:text-amber-300 transition-colors">
              <span>Explore Full Weekend Itinerary</span>
              <FaArrowRight size={10} />
            </Link>
          </div>
        </div>

        {/* Event Preview Section */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-white/8 rounded-3xl p-6 space-y-5 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400">Happening Soon</span>
              <h3 className="text-lg font-extrabold text-white">Upcoming Weekend Events</h3>
            </div>
            <Link to="/events" className="text-xs font-extrabold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
              <span>All Events</span>
              <FaArrowRight size={10} />
            </Link>
          </div>
          <div className="space-y-3">
            {weekendEvents.map((evt) => (
              <div key={evt.id} className="bg-slate-950/80 border border-white/8 p-3.5 rounded-2xl flex items-center justify-between gap-3 hover:border-emerald-400/40 transition-all duration-300">
                <div className="space-y-1 min-w-0">
                  <h4 className="text-white font-bold text-xs truncate">{evt.title}</h4>
                  <p className="text-white/50 text-[10px] flex items-center gap-1.5">
                    <FaCalendarAlt className="text-emerald-400" /> {evt.date} • {evt.location}
                  </p>
                </div>
                <span className="shrink-0 bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 px-2.5 py-1 rounded-full text-[10px] font-extrabold">
                  {evt.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;