import React, { useState } from "react";
import { FaSearch, FaSlidersH, FaTimes } from "react-icons/fa";

const defaultSuggestions = [
  "Chinese food in Westlands",
  "Date night under KES 3,000",
  "Live music tonight",
  "Places with free parking",
];

const SearchBar = ({
  value = "",
  onChange,
  onSubmit,
  placeholder = "Type venue, event, or cuisine...",
  suggestions = defaultSuggestions,
  className = "",
}) => {
  const [query, setQuery] = useState(value);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const currentValue = onChange ? value : query;

  const handleChange = (e) => {
    const next = e.target.value;
    if (onChange) onChange(next);
    else setQuery(next);
    setShowSuggestions(true);
  };

  const clearSearch = () => {
    if (onChange) onChange("");
    else setQuery("");
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(currentValue);
    setShowSuggestions(false);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="group relative flex items-center rounded-2xl border border-white/6 bg-white/[0.05] px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-all duration-300 focus-within:border-emerald-400/35 focus-within:bg-white/[0.07] focus-within:shadow-[0_0_0_1px_rgba(16,185,129,0.12),0_18px_45px_rgba(0,0,0,0.18)]"
      >
        <FaSearch className="ml-1 text-sm text-white/40 transition-colors duration-300 group-focus-within:text-emerald-300" />

        <input
          value={currentValue}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            window.setTimeout(() => setShowSuggestions(false), 120);
          }}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 text-sm text-white placeholder:text-white/35 outline-none"
        />

        {currentValue && (
          <button
            type="button"
            onClick={clearSearch}
            className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-white/45 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            aria-label="Clear search"
          >
            <FaTimes className="text-xs" />
          </button>
        )}

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/6 bg-white/[0.04] text-white/60 transition-all duration-300 hover:border-emerald-400/25 hover:bg-white/[0.08] hover:text-emerald-300"
          aria-label="Open filters"
        >
          <FaSlidersH className="text-xs" />
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute left-0 top-[calc(100%+10px)] z-20 w-full overflow-hidden rounded-2xl border border-white/6 bg-slate-950/95 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="border-b border-white/6 px-4 py-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
              Suggestions
            </p>
          </div>

          <div className="p-2">
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  if (onChange) onChange(item);
                  else setQuery(item);
                  setShowSuggestions(false);
                }}
                className="flex w-full items-center rounded-xl px-3 py-3 text-left text-sm text-slate-200 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
              >
                <span className="mr-3 h-2 w-2 rounded-full bg-emerald-300/70" />
                <span>{item}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;