import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSearch from "./HeroSearch";

const HeroSection = () => {
  const categoryGateways = [
    {
      name: "Explore Nature",
      path: "/explore/nature",
      theme:
        "from-emerald-500/90 via-emerald-700/65 to-slate-950 border-emerald-400/25",
      accent: "emerald",
    },
    {
      name: "Cafe & Eats",
      path: "/explore/eats",
      theme:
        "from-amber-400/85 via-amber-700/60 to-slate-950 border-amber-400/25",
      accent: "amber",
    },
    {
      name: "Action & Play",
      path: "/explore/action",
      theme:
        "from-sky-500/85 via-blue-700/60 to-slate-950 border-sky-400/25",
      accent: "sapphire",
    },
    {
      name: "Social Pulse & Events",
      path: "/events",
      theme:
        "from-rose-500/85 via-fuchsia-700/60 to-slate-950 border-rose-400/25",
      accent: "ruby",
    },
  ];

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      {/* Background image + overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=80"
          alt="Kenyan hidden gem scenery"
          className="h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-[#05080b]/72 to-[#05080b]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.07),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_14%,transparent_86%,rgba(255,255,255,0.02))]" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full text-center"
        >
          <div className="mx-auto inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-200 backdrop-blur-md">
            Kenya&apos;s discovery-first urban lifestyle platform
          </div>

          <h1 className="mt-6 text-balance text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Unearth Kenya&apos;s
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
              Best-Kept Secrets.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            Find verified places, practical logistics, hidden gems, event
            moments, and weekend vibes without jumping between apps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10 w-full"
        >
          <HeroSearch />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {categoryGateways.map((gateway) => (
            <Link
              key={gateway.path}
              to={gateway.path}
              className={[
                "group relative overflow-hidden rounded-3xl border p-4 shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_50px_rgba(0,0,0,0.35)]",
                gateway.theme,
              ].join(" ")}
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="relative flex h-28 flex-col justify-end">
                <div className="mb-2 inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                  {gateway.accent}
                </div>

                <span className="text-left text-sm font-extrabold leading-tight text-white transition-colors duration-300 group-hover:text-white sm:text-base">
                  {gateway.name}
                </span>

                <span className="mt-1 text-left text-xs text-white/65">
                  Open a curated discovery lane
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;