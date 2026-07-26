import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiX, HiUser } from "react-icons/hi";
import { FaCompass, FaSignOutAlt } from "react-icons/fa";

const MobileDrawer = ({ isOpen, onClose, navLinks = [], user, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-white/6 bg-slate-950/92 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/6 px-5 py-5">
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400 text-slate-950">
              <FaCompass size={16} />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-black tracking-[0.18em] text-white">
                GEMSPOT <span className="text-emerald-300">KE</span>
              </span>
              <span className="text-[11px] text-white/40">Mobile Menu</span>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04] text-white transition-all duration-300 hover:border-emerald-400/20 hover:bg-white/[0.08]"
            aria-label="Close menu"
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <p className="px-1 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
            Navigate
          </p>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  [
                    "group flex items-center gap-3 rounded-2xl border px-4 py-4 text-base font-semibold transition-all duration-300",
                    isActive
                      ? "border-emerald-400/20 bg-emerald-400 text-slate-950 shadow-[0_0_0_1px_rgba(16,185,129,0.14)]"
                      : "border-white/6 bg-white/[0.04] text-slate-200 hover:border-emerald-400/20 hover:bg-white/[0.08] hover:text-white",
                  ].join(" ")
                }
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300/0 transition-all duration-300 group-hover:bg-emerald-300/70" />
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 rounded-3xl border border-white/6 bg-white/[0.04] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
              Account
            </p>

            {user ? (
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10 text-emerald-300">
                    <HiUser size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">
                      {user.name || "Explorer"}
                    </p>
                    <p className="truncate text-xs text-white/45">
                      {user.email || "Logged in"}
                    </p>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Link
                    to="/profile"
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-emerald-400/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    <HiUser size={16} />
                    <span>My Profile</span>
                  </Link>

                  <button
                    onClick={onLogout}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-400/15 bg-rose-400/10 px-4 py-3 font-semibold text-rose-200 transition-all duration-300 hover:bg-rose-400/15"
                  >
                    <FaSignOutAlt size={14} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-4 grid gap-2">
                <Link
                  to="/auth/login"
                  onClick={onClose}
                  className="rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-3 text-center font-semibold text-slate-200 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.08] hover:text-white"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth/register"
                  onClick={onClose}
                  className="rounded-2xl border border-emerald-400/15 bg-emerald-400 px-4 py-3 text-center font-bold text-slate-950 transition-all duration-300 hover:brightness-110"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileDrawer;