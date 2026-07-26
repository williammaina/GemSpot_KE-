import React, { useState } from 'react';
import { FaMapMarkedAlt, FaSearch, FaFilter, FaPlus, FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';

const ManagePlaces = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const [places, setPlaces] = useState([
    { id: '101', name: "CJ's Restaurant", location: 'Village Market, Gigiri', category: 'Eats', rating: 4.9, status: 'Verified', damage: 'KES 5,500/-' },
    { id: '1', name: 'Karura Forest', location: 'Limuru Road, Nairobi', category: 'Nature', rating: 4.8, status: 'Verified', damage: 'KES 600/-' },
    { id: '201', name: 'Alchemist Bar', location: 'Westlands, Nairobi', category: 'Nightlife', rating: 4.8, status: 'Pending', damage: 'KES 6,000/-' },
    { id: '301', name: 'Solar Ice Rink', location: 'Panari Centre', category: 'Action & Play', rating: 4.7, status: 'Verified', damage: 'KES 1,200/-' },
  ]);

  const filteredPlaces = places.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = filterCategory === 'all' || p.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCat;
  });

  const deletePlace = (id) => {
    setPlaces(places.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-emerald-500/20 p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <FaMapMarkedAlt size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400">Inventory Control</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Manage Verified Places</h1>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Add, edit, or remove verified Nairobi and Kenya spots.</p>
          </div>
        </div>
        <button className="px-5 py-3 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
          <FaPlus size={12} /> Add New Spot
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-4 rounded-2xl shadow">
        <div className="relative w-full sm:w-80">
          <FaSearch className="absolute left-4 top-3.5 text-neutral-500" size={14} />
          <input
            type="text"
            placeholder="Search place name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-11 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {['all', 'eats', 'nature', 'nightlife', 'action & play'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-2 rounded-xl text-xs font-bold capitalize transition-all whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table Surface with Clean Headers */}
      <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-950/60 text-[10px] uppercase tracking-wider font-extrabold text-neutral-400">
                <th className="py-4 px-6">Spot Name</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Location</th>
                <th className="py-4 px-6">Damage</th>
                <th className="py-4 px-6">Status Chip</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80 text-xs">
              {filteredPlaces.length > 0 ? (
                filteredPlaces.map((spot) => (
                  <tr key={spot.id} className="hover:bg-neutral-950/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">{spot.name}</td>
                    <td className="py-4 px-6 text-neutral-400">{spot.category}</td>
                    <td className="py-4 px-6 text-neutral-400">{spot.location}</td>
                    <td className="py-4 px-6 font-semibold text-emerald-400">{spot.damage}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold inline-flex items-center gap-1 ${
                        spot.status === 'Verified'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}>
                        {spot.status === 'Verified' && <FaCheckCircle size={9} />}
                        {spot.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-xl bg-neutral-950 hover:bg-emerald-500/20 text-neutral-400 hover:text-emerald-400 border border-neutral-800 transition-colors" title="Edit Spot">
                          <FaEdit size={12} />
                        </button>
                        <button onClick={() => deletePlace(spot.id)} className="p-2 rounded-xl bg-neutral-950 hover:bg-rose-500/20 text-neutral-400 hover:text-rose-400 border border-neutral-800 transition-colors" title="Delete Spot">
                          <FaTrash size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-neutral-500 text-xs">
                    No places matched your filter criteria.
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

export default ManagePlaces;