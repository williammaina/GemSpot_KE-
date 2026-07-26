import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCompass } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await register({ name, email, password });
      navigate('/profile');
    } catch (err) {
      setError(err.message || 'Failed to create account.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20">
            <FaCompass size={24} />
          </div>
          <h1 className="text-2xl font-black text-white">Join GemSpot KE</h1>
          <p className="text-neutral-400 text-xs">Create your explorer account today</p>
        </div>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/30 p-3 rounded-xl text-rose-400 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-300">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Wanjiru Kimani"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-300">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="explorer@gemspotke.co.ke"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-300">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-xs text-neutral-400">
          Already have an account? <Link to="/auth/login" className="text-emerald-400 font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;