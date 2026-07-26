import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCompass } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20">
            <FaCompass size={24} />
          </div>
          <h1 className="text-2xl font-black text-white">Reset Password</h1>
          <p className="text-neutral-400 text-xs">Enter your email to receive recovery instructions</p>
        </div>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl text-emerald-400 text-xs text-center space-y-2">
            <p className="font-bold">Password reset link sent!</p>
            <p>Check your inbox for further instructions.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <p className="text-center text-xs text-neutral-400">
          Remembered your password? <Link to="/auth/login" className="text-emerald-400 font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;