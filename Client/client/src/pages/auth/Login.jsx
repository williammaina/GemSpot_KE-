import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCompass, FaLock, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login({ email, password });
      navigate('/profile');
    } catch (err) {
      setError(err.message || 'Failed to sign in.');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 relative overflow-hidden bg-neutral-950">
      {/* Soft Gradient Backdrop Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-neutral-900/80 backdrop-blur-2xl border border-neutral-800/80 p-8 sm:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] space-y-8 relative z-10">
        <div className="text-center space-y-3">
          <div className="inline-flex p-4 rounded-2xl bg-emerald-400 text-neutral-950 font-bold shadow-[0_0_25px_rgba(52,211,153,0.3)]">
            <FaCompass size={28} />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-white tracking-tight">Welcome Back</h1>
            <p className="text-neutral-400 text-xs">Sign in to access your saved spots, reviews & curated guides</p>
          </div>
        </div>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/30 p-3.5 rounded-2xl text-rose-400 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
              <FaEnvelope className="text-emerald-400" size={11} /> Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="explorer@gemspotke.co.ke"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400 transition-colors shadow-inner"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                <FaLock className="text-emerald-400" size={11} /> Password
              </label>
              <Link to="/auth/forgot-password" className="text-[11px] text-neutral-400 hover:text-emerald-400 font-bold transition-colors">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400 transition-colors shadow-inner"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] cursor-pointer hover:-translate-y-0.5"
          >
            Sign In to GemSpot
          </button>
        </form>

        <div className="text-center pt-2 border-t border-neutral-800/80">
          <p className="text-xs text-neutral-400">
            Don't have an account? <Link to="/auth/register" className="text-emerald-400 font-extrabold hover:underline">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;