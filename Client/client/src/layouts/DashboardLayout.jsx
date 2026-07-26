import React from "react";
import { Outlet, NavLink, Link, useNavigate, Navigate, useLocation } from "react-router-dom";
import {
  FaCompass,
  FaUser,
  FaHeart,
  FaStar,
  FaShieldAlt,
  FaSignOutAlt,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/auth/login");
  };

  const isAdmin = user?.role === "admin";

  // Auto-redirect base /dashboard or /admin paths to their respective default landing views
  if (location.pathname === "/dashboard" && isAdmin) {
    return <Navigate to="/admin" replace />;
  }
  if (location.pathname === "/admin" && !isAdmin && user) {
    return <Navigate to="/dashboard" replace />;
  }

  const userNavLinks = [
    { label: "My Profile", path: "/profile", icon: <FaUser /> },
    { label: "Saved Favorites", path: "/profile/favorites", icon: <FaHeart /> },
    { label: "My Verified Reviews", path: "/profile/my-reviews", icon: <FaStar /> },
  ];

  const adminNavLinks = [
    { label: "Admin Overview", path: "/admin", icon: <FaShieldAlt /> },
    { label: "Manage Places", path: "/admin/places", icon: <FaMapMarkedAlt /> },
    { label: "Manage Events", path: "/admin/events", icon: <FaCalendarAlt /> },
    { label: "Manage Users", path: "/admin/users", icon: <FaUsers /> },
  ];

  const currentLinks = isAdmin ? adminNavLinks : userNavLinks;

  const navLinkClass = ({ isActive }) =>
    [
      "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300",
      "border border-white/5 backdrop-blur-md",
      isActive
        ? "bg-emerald-400 text-slate-950 shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_12px_30px_rgba(16,185,129,0.12)]"
        : "bg-white/4 text-slate-300 hover:border-emerald-400/30 hover:bg-white/8 hover:text-white",
    ].join(" ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05080b] via-[#071319] to-[#090d10] text-slate-100 antialiased">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-80 shrink-0 border-r border-white/6 bg-slate-950/70 px-6 py-6 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950 shadow-[0_10px_25px_rgba(16,185,129,0.18)]">
                <FaCompass size={18} />
              </div>
              <div className="leading-tight">
                <span className="block text-lg font-black tracking-wide text-white">
                  GemSpot<span className="text-emerald-300">KE</span>
                </span>
                <span className="text-xs text-white/45">Discovery Workspace</span>
              </div>
            </Link>

            <div className="rounded-3xl border border-white/6 bg-white/4 p-4 shadow-lg backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Logged in as
              </p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-white">
                    {user?.name || "Explorer"}
                  </p>
                  <p className="truncate text-xs text-white/45">
                    {user?.email || "user@gemspot.ke"}
                  </p>
                </div>
                <span className="inline-flex shrink-0 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-200">
                  {user?.role || "User"}
                </span>
              </div>
            </div>

            <nav className="space-y-2">
              <p className="px-1 pb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/35">
                {isAdmin ? "Administration" : "User Portal"}
              </p>

              <div className="space-y-2">
                {currentLinks.map((link) => (
                  <NavLink key={link.path} to={link.path} className={navLinkClass}>
                    <span className="text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                    <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400/0 transition-all duration-300 group-hover:bg-emerald-400/70" />
                  </NavLink>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/"
                  className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/4 px-4 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/8 hover:text-white"
                >
                  <FaCompass className="text-emerald-300" />
                  <span>Explore Nairobi Spots</span>
                </Link>
              </div>
            </nav>
          </div>

          <div className="mt-auto border-t border-white/6 pt-5">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-2xl border border-rose-400/15 bg-rose-400/10 px-4 py-3 text-sm font-semibold text-rose-200 transition-all duration-300 hover:bg-rose-400/15 hover:text-rose-100"
            >
              <FaSignOutAlt />
              <span>Sign Out Session</span>
            </button>
          </div>
        </aside>

        {/* Main content viewport */}
        <section className="min-w-0 flex-1">
          {/* Mobile top bar */}
          <div className="sticky top-0 z-20 border-b border-white/6 bg-slate-950/75 px-4 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between gap-3">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                  <FaCompass size={16} />
                </div>
                <div className="leading-tight">
                  <span className="block text-sm font-black text-white">
                    GemSpot<span className="text-emerald-300">KE</span>
                  </span>
                  <span className="text-[11px] text-white/45">
                    {isAdmin ? "Admin Panel" : "Dashboard"}
                  </span>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <span className="inline-flex rounded-full border border-white/6 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
                  {user?.role || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-rose-400/15 bg-rose-400/10 text-rose-200 transition-all duration-300 hover:bg-rose-400/15"
                  aria-label="Sign out"
                >
                  <FaSignOutAlt className="text-sm" />
                </button>
              </div>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {currentLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    [
                      "whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300",
                      isActive
                        ? "bg-emerald-400 text-slate-950"
                        : "border border-white/6 bg-white/4 text-slate-300 hover:bg-white/8 hover:text-white",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
            <div className="mx-auto max-w-6xl space-y-6">
              <div className="space-y-6">
                <Outlet />
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;