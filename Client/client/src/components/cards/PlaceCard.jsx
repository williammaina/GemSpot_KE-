import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaCar,
  FaCheckCircle,
  FaArrowRight,
  FaCreditCard,
} from "react-icons/fa";

const PlaceCard = ({ place }) => {
  const {
    id = "1",
    name = "CJ's Restaurant - Village Market",
    category = "Café & Eats",
    image = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    rating = 4.9,
    reviewsCount = 124,
    location = "Village Market, Gigiri",
    damageForTwo = "KES 5,500/- for two",
    mpesaAvailable = true,
    parkingSecure = true,
    wifiReliable = true,
    verified = true,
    accent = "emerald",
  } = place || {};

  const accentStyle =
    accent === "amber"
      ? "group-hover:border-amber-400/60 group-hover:shadow-[0_0_0_1px_rgba(245,158,11,0.18),0_18px_45px_rgba(0,0,0,0.38)]"
      : accent === "sapphire"
      ? "group-hover:border-sky-400/60 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.18),0_18px_45px_rgba(0,0,0,0.38)]"
      : accent === "ruby"
      ? "group-hover:border-rose-400/60 group-hover:shadow-[0_0_0_1px_rgba(244,63,94,0.18),0_18px_45px_rgba(0,0,0,0.38)]"
      : "group-hover:border-emerald-400/60 group-hover:shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_18px_45px_rgba(0,0,0,0.38)]";

  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-slate-950/70 shadow-xl transition-all duration-300 hover:-translate-y-1 ${accentStyle}`}
    >
      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/8 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
            {verified && <FaCheckCircle className="text-[10px] text-emerald-300" />}
            <span>{category}</span>
          </span>
        </div>

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-amber-400/20 bg-black/40 px-3 py-1 text-xs font-bold text-amber-200 backdrop-blur-md">
          <FaStar className="text-[10px] text-amber-300" />
          <span>
            {rating} <span className="text-white/60">({reviewsCount})</span>
          </span>
        </div>

        <div className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/85 backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:border-white/20 group-hover:bg-white/10">
          <FaArrowRight className="text-sm" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-2">
          <Link to={`/places/${id}`} className="block">
            <h3 className="line-clamp-1 text-xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-200">
              {name}
            </h3>
          </Link>

          <p className="flex items-center gap-2 text-sm text-white/68">
            <FaMapMarkerAlt className="shrink-0 text-rose-300" />
            <span className="truncate">{location}</span>
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-white/8 bg-white/5 p-4 backdrop-blur-md">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Damage for two
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/15 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-200">
              <FaCreditCard className="text-[10px]" />
              {damageForTwo}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {mpesaAvailable && (
              <span className="inline-flex items-center rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 font-semibold text-emerald-200">
                M-Pesa Available
              </span>
            )}
            {parkingSecure && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75">
                <FaCar className="text-[10px]" />
                Secure Parking
              </span>
            )}
            {wifiReliable && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75">
                <FaWifi className="text-[10px]" />
                Wi-Fi
              </span>
            )}
          </div>
        </div>

        <Link
          to={`/places/${id}`}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-white/6 px-4 py-3 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-emerald-400 hover:text-slate-950 hover:shadow-lg hover:shadow-emerald-500/15"
        >
          <span>View Logistics & Vibe Check</span>
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;