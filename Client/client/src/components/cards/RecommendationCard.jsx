import React from "react";
import { Link } from "react-router-dom";
import { FaFire, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const RecommendationCard = ({ recommendation }) => {
  const {
    id = "1",
    title = "Top Rooftop Pick for Date Night",
    subtitle = "KICC Rooftop & Café View",
    image = "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    tag = "Algorithmic Vibe Match",
    location = "CBD, Nairobi",
    accent = "emerald",
  } = recommendation || {};

  const accentStyle =
    accent === "amber"
      ? "group-hover:border-amber-400/60 group-hover:shadow-[0_0_0_1px_rgba(245,158,11,0.18),0_18px_45px_rgba(0,0,0,0.38)]"
      : accent === "sapphire"
      ? "group-hover:border-sky-400/60 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.18),0_18px_45px_rgba(0,0,0,0.38)]"
      : "group-hover:border-emerald-400/60 group-hover:shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_18px_45px_rgba(0,0,0,0.38)]";

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-slate-950/70 shadow-xl transition-all duration-300 hover:-translate-y-1 md:flex-row ${accentStyle}`}
    >
      <div className="relative h-56 overflow-hidden bg-slate-950 md:h-auto md:w-2/5">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100 backdrop-blur-md">
          <FaFire className="text-[10px]" />
          <span>{tag}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300/80">
            Curated For Your Weekend
          </span>

          <h3 className="text-2xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-200">
            {title}
          </h3>

          <p className="max-w-2xl text-sm leading-6 text-white/72">{subtitle}</p>

          <p className="flex items-center gap-2 text-sm text-white/55">
            <FaMapMarkerAlt className="text-rose-300" />
            <span>{location}</span>
          </p>
        </div>

        <div className="mt-5">
          <Link
            to={`/places/${id}`}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-white/90 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400 hover:text-slate-950 hover:shadow-lg hover:shadow-emerald-500/15"
          >
            <span>Explore Spot Details</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;