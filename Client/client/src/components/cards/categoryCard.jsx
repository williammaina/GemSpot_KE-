import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ category }) => {
  const {
    name = "Explore Nature",
    path = "/explore/nature",
    image = "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    themeColor = "from-emerald-500/90 via-emerald-700/70 to-slate-950",
    label = "Browse verified spots",
    accent = "emerald",
  } = category || {};

  const accentGlow =
    accent === "amber"
      ? "group-hover:border-amber-400/60 group-hover:shadow-[0_0_0_1px_rgba(245,158,11,0.20),0_18px_45px_rgba(0,0,0,0.38)]"
      : accent === "sapphire"
      ? "group-hover:border-sky-400/60 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.20),0_18px_45px_rgba(0,0,0,0.38)]"
      : accent === "ruby"
      ? "group-hover:border-rose-400/60 group-hover:shadow-[0_0_0_1px_rgba(244,63,94,0.20),0_18px_45px_rgba(0,0,0,0.38)]"
      : "group-hover:border-emerald-400/60 group-hover:shadow-[0_0_0_1px_rgba(16,185,129,0.20),0_18px_45px_rgba(0,0,0,0.38)]";

  return (
    <Link
      to={path}
      className={`group relative flex h-44 overflow-hidden rounded-3xl border border-white/8 bg-slate-950/60 p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 ${accentGlow}`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-55"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${themeColor}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-end">
        <div className="mb-3 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur-md">
          {label}
        </div>

        <h4 className="max-w-[85%] text-xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-white">
          {name}
        </h4>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-white/70">Tap to open this discovery lane</p>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/90 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/15">
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;