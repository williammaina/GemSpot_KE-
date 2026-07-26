import React, { useMemo, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { FaSlidersH } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChip, setActiveChip] = useState(null);
  const navigate = useNavigate();

  const sampleChips = useMemo(
    () => [
      { label: "Chinese Food 🍲", value: "chinese" },
      { label: "Lavington 📍", value: "lavington" },
      { label: "Date Night ❤️", value: "date-night" },
      { label: "Live Music 🎤", value: "live-music" },
    ],
    []
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const q = searchTerm.trim();
    const filter = activeChip?.value || "";

    if (!q && !filter) return;

    const params = new URLSearchParams();
    if (q) params.set("query", q);
    if (filter) params.set("filter", filter);

    navigate(`/explore/eats?${params.toString()}`);
  };

  const handleChipClick = (chip) => {
    if (activeChip?.value === chip.value) {
      setActiveChip(null);
      return;
    }

    setActiveChip(chip);
    setSearchTerm(chip.label.replace(/[🍲📍❤️🎤]/g, "").trim());
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <form
        onSubmit={handleSearchSubmit}
        className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/6 p-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 focus-within:border-emerald-400/35 focus-within:bg-white/8 focus-within:shadow-[0_0_0_1px_rgba(16,185,129,0.12),0_24px_60px_rgba(0,0,0,0.32)]"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-slate-950/55 px-4 py-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10 text-emerald-300 transition-colors duration-300 group-focus-within:border-emerald-400/25 group-focus-within:bg-emerald-400/15">
            <HiSearch size={20} />
          </div>

          <div className="min-w-0 flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type venue, event, or cuisine..."
              className="w-full bg-transparent text-sm font-medium text-white placeholder:text-white/35 outline-none sm:text-base"
            />
            <p className="mt-1 text-[11px] text-white/35">
              Search by place, vibe, or neighborhood
            </p>
          </div>

          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-white/60 transition-all duration-300 hover:border-emerald-400/20 hover:bg-white/10 hover:text-emerald-300 sm:inline-flex"
            aria-label="Open filters"
          >
            <FaSlidersH className="text-sm" />
          </button>

          <button
            type="submit"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 px-5 text-sm font-extrabold text-slate-950 shadow-[0_10px_25px_rgba(16,185,129,0.18)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_12px_30px_rgba(16,185,129,0.26)]"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1 text-xs font-medium text-white/45">Try:</span>
        {sampleChips.map((chip) => {
          const active = activeChip?.value === chip.value;

          return (
            <button
              key={chip.value}
              type="button"
              onClick={() => handleChipClick(chip)}
              className={[
                "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300",
                "backdrop-blur-md",
                active
                  ? "border-emerald-400/25 bg-emerald-400 text-slate-950 shadow-[0_0_0_1px_rgba(16,185,129,0.14),0_10px_25px_rgba(16,185,129,0.16)]"
                  : "border-white/8 bg-white/5 text-slate-200 hover:border-emerald-400/20 hover:bg-white/8 hover:text-white",
              ].join(" ")}
            >
              <span>{chip.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSearch;