import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WeatherAlert from "../components/vibe/WeatherAlert";

const MainLayout = () => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#05080b] via-[#071319] to-[#090d10] text-slate-100 antialiased">
      {/* Ambient background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_26%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.06),transparent_24%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_12%,transparent_88%,rgba(255,255,255,0.015))]"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col">
        <Navbar />

        <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/6 bg-white/3 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <WeatherAlert />
          </div>
        </div>

        <main className="relative flex-1">
          <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="space-y-8">
              <Outlet />
            </div>
          </div>
        </main>

        <div className="relative mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;