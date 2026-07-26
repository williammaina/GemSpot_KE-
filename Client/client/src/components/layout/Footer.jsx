import React from "react";
import { Link } from "react-router-dom";
import { FaCompass } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-slate-950/78 px-4 py-10 text-sm text-slate-400 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400 text-slate-950 shadow-[0_10px_25px_rgba(16,185,129,0.16)]">
                <FaCompass size={16} />
              </div>
              <div>
                <h3 className="text-base font-black tracking-[0.16em] text-white">
                  GEMSPOT <span className="text-emerald-300">KE</span>
                </h3>
                <p className="text-xs text-white/40">Discover Kenya better</p>
              </div>
            </div>
            <p className="max-w-sm leading-6 text-white/55">
              A premium discovery platform for places, experiences, and events
              across Kenya.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
              Explore
            </h4>
            <div className="mt-4 space-y-3">
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/explore/nature">
                Nature
              </Link>
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/explore/eats">
                Eats
              </Link>
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/explore/nightlife">
                Nightlife
              </Link>
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/explore/action">
                Action & Play
              </Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
              Account
            </h4>
            <div className="mt-4 space-y-3">
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/profile">
                Profile
              </Link>
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/profile/favorites">
                Favorites
              </Link>
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/profile/my-reviews">
                My Reviews
              </Link>
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/dashboard">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
              Legal
            </h4>
            <div className="mt-4 space-y-3">
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/">
                Privacy Policy
              </Link>
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/">
                Terms of Service
              </Link>
              <Link className="block transition-colors duration-200 hover:text-emerald-300" to="/">
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {year} GemSpot KE. Local intelligence for Kenya’s best
            discoveries.
          </p>
          <p className="text-xs text-white/30">
            Built for a premium, discovery-first experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;