import React from "react";
import { FaStar, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const {
    author = "Raey Mghoi",
    avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating = 5,
    date = "2 days ago",
    content = "The place is a total vibe! Ordered coffee and worked for 3 hours straight with zero side-eyes. Power sockets everywhere and M-Pesa till worked instantly.",
    vibeTag = "Laptop Friendly & Quiet",
    damageConfirmed = "KES 1,800/- for two",
    accent = "emerald",
  } = review || {};

  const accentHover =
    accent === "amber"
      ? "group-hover:border-amber-400/60 group-hover:shadow-[0_0_0_1px_rgba(245,158,11,0.18),0_18px_45px_rgba(0,0,0,0.38)]"
      : accent === "sapphire"
      ? "group-hover:border-sky-400/60 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.18),0_18px_45px_rgba(0,0,0,0.38)]"
      : accent === "ruby"
      ? "group-hover:border-rose-400/60 group-hover:shadow-[0_0_0_1px_rgba(244,63,94,0.18),0_18px_45px_rgba(0,0,0,0.38)]"
      : "group-hover:border-emerald-400/60 group-hover:shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_18px_45px_rgba(0,0,0,0.38)]";

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-slate-950/70 p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 ${accentHover}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src={avatar}
                alt={author}
                className="h-11 w-11 rounded-full border border-white/10 object-cover ring-2 ring-white/5"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-slate-950 bg-emerald-400 text-[9px] text-slate-950">
                <FaCheckCircle />
              </span>
            </div>

            <div className="min-w-0">
              <h5 className="truncate text-sm font-bold text-white">{author}</h5>
              <p className="text-xs text-white/45">{date}</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1 rounded-full border border-amber-400/15 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-200">
            <FaStar className="text-[10px] text-amber-300" />
            <span>{rating}.0</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/5 p-4 backdrop-blur-md">
          <div className="mb-3 flex items-center gap-2 text-white/35">
            <FaQuoteLeft className="text-xs" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Local Review
            </span>
          </div>

          <p className="text-sm leading-7 text-white/80">{content}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-white/8 pt-4 text-xs">
          <span className="inline-flex items-center rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 font-semibold text-emerald-200">
            Vibe: {vibeTag}
          </span>

          <span className="inline-flex items-center rounded-full border border-amber-400/15 bg-amber-400/10 px-3 py-1 font-semibold text-amber-200">
            Damage Confirmed: {damageConfirmed}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;