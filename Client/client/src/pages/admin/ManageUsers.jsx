import React, { useState } from 'react';
import { FaUsers, FaSearch, FaShieldAlt, FaUserCheck, FaTrash, FaUserShield } from 'react-icons/fa';

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    { id: 'u1', name: 'Amina Mwangi', email: 'amina@gemspotke.co.ke', role: 'Admin', status: 'Active', joined: 'Oct 2025' },
    { id: 'u2', name: 'Brian Kiprop', email: 'brian@gemspotke.co.ke', role: 'Business Owner', status: 'Active', joined: 'Nov 2025' },
    { id: 'u3', name: 'Cynthia Akinyi', email: 'cynthia@explorer.co.ke', role: 'User', status: 'Active', joined: 'Jan 2026' },
  ]);

  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase()));

  const toggleRole = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const nextRole = u.role === 'User' ? 'Business Owner' : u.role === 'Business Owner' ? 'Admin' : 'User';
        return { ...u, role: nextRole };
      }
      return u;
    }));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/20 p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <FaUsers size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-blue-400">User Access & Privileges</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Manage Users & Roles</h1>
            <p className="text-white/70 text-xs sm:text-sm font-medium">View registered accounts, assign business owner or admin privileges, and moderate permissions.</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-4 rounded-2xl shadow">
        <div className="relative w-full sm:w-80">
          <FaSearch className="absolute left-4 top-3.5 text-neutral-500" size={14} />
          <input
            type="text"
            placeholder="Search explorer name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-11 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>

      {/* Table Surface */}
      <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-950/60 text-[10px] uppercase tracking-wider font-extrabold text-neutral-400">
                <th className="py-4 px-6">Explorer Name</th>
                <th className="py-4 px-6">Email Address</th>
                <th className="py-4 px-6">Role Badge</th>
                <th className="py-4 px-6">Account Status</th>
                <th className="py-4 px-6">Joined Date</th>
                <th className="py-4 px-6 text-right">Moderation Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80 text-xs">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-neutral-950/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">{u.name}</td>
                    <td className="py-4 px-6 text-neutral-400">{u.email}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold inline-flex items-center gap-1 ${
                        u.role === 'Admin'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : u.role === 'Business Owner'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        <FaShieldAlt size={9} /> {u.role}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full bg-neutral-950 text-emerald-400 border border-neutral-800 text-[10px] font-extrabold">
                        {u.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-neutral-500 font-medium">{u.joined}</td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => toggleRole(u.id)}
                          className="px-3 py-1.5 rounded-xl bg-neutral-950 hover:bg-blue-500/20 text-neutral-400 hover:text-blue-400 border border-neutral-800 transition-colors font-bold text-[11px] flex items-center gap-1"
                          title="Cycle Role Privilege"
                        >
                          <FaUserShield size={11} /> Toggle Role
                        </button>
                        <button 
                          onClick={() => deleteUser(u.id)}
                          className="p-2 rounded-xl bg-neutral-950 hover:bg-rose-500/20 text-neutral-400 hover:text-rose-400 border border-neutral-800 transition-colors"
                          title="Suspend User"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-neutral-500 text-xs">
                    No registered explorer accounts matched your search.
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

export default ManageUsers;