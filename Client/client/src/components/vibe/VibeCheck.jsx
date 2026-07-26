import React from 'react';
import CrowdMeter from './CrowdMeter';
import WeatherAlert from './WeatherAlert';
import { FaCheckCircle, FaWifi, FaCar, FaBroadcastTower } from 'react-icons/fa';

const VibeCheck = ({ place }) => {
  const {
    crowdLevel = "Moderate Vibe",
    crowdPercentage = 55,
    mpesaTill = "Instant (Confirmed)",
    parking = "Secure Valet Available",
    wifiSpeed = "45 Mbps (High Speed)"
  } = place || {};

  return (
    <div className="space-y-4">
      <CrowdMeter level={crowdLevel} percentage={crowdPercentage} />
      <WeatherAlert />
      
      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h5 className="text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 text-emerald-400">
            <FaBroadcastTower className="text-emerald-400 animate-pulse" />
            Verified Logistics Breakdown
          </h5>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
            Real-Time Signal
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/8 space-y-1.5 transition-all duration-300 hover:border-emerald-400/40">
            <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-400" /> M-Pesa Till
            </span>
            <p className="text-xs font-extrabold text-white">{mpesaTill}</p>
          </div>

          <div className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/8 space-y-1.5 transition-all duration-300 hover:border-white/20">
            <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider flex items-center gap-1.5">
              <FaCar className="text-amber-400" /> Parking
            </span>
            <p className="text-xs font-extrabold text-white">{parking}</p>
          </div>

          <div className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/8 space-y-1.5 transition-all duration-300 hover:border-blue-400/40">
            <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider flex items-center gap-1.5">
              <FaWifi className="text-blue-400" /> Wi-Fi Speed
            </span>
            <p className="text-xs font-extrabold text-white">{wifiSpeed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VibeCheck;