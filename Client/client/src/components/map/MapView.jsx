import React, { useState } from 'react';
import MapMarker from './MapMarker';
import { FaCompass, FaExternalLinkAlt, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';
import { useMapbox } from '../../hooks/useMapbox';

const MapView = ({ places = [] }) => {
  const { coordinates, mapLoaded } = useMapbox([-1.2921, 36.8219]);
  
  const [selectedPlace, setSelectedPlace] = useState(places[0] || {
    id: '1',
    name: "CJ's Restaurant - Village Market",
    location: "Gigiri, Nairobi",
    damageForTwo: "KES 5,500/- for two",
    accent: "emerald",
    topCoord: '45%',
    leftCoord: '55%'
  });

  const mockPlaces = places.length > 0 ? places : [
    { id: '1', name: "CJ's Restaurant", location: "Village Market", damageForTwo: "KES 5,500/-", accent: 'emerald', topCoord: '45%', leftCoord: '55%' },
    { id: '2', name: "Karura Forest Gate", location: "Limuru Road", damageForTwo: "KES 600/- Entry", accent: 'amber', topCoord: '30%', leftCoord: '40%' },
    { id: '3', name: "Mercado Mexican Kitchen", location: "CBD Westlands", damageForTwo: "KES 6,000/-", accent: 'ruby', topCoord: '65%', leftCoord: '50%' },
  ];

  if (!mapLoaded) {
    return (
      <div className="relative w-full h-[480px] bg-slate-950 border border-white/8 rounded-3xl flex items-center justify-center text-emerald-400 text-xs font-semibold animate-pulse shadow-2xl backdrop-blur-md">
        Initializing Nairobi Intelligence Map...
      </div>
    );
  }

  return (
    <div className="relative w-full h-[480px] bg-slate-950 border border-white/8 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
      {/* Map Header Toolbar */}
      <div className="absolute top-4 left-4 z-30 bg-slate-900/85 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-semibold text-white/90 shadow-xl">
        <FaCompass className="text-emerald-400 animate-spin-slow" />
        <span>Nairobi Intelligence Map <span className="text-white/40 font-normal">({coordinates[0]}, {coordinates[1]})</span></span>
      </div>

      {/* Map Canvas Background */}
      <div className="relative flex-1 w-full bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:20px_20px] bg-slate-950 flex items-center justify-center">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-emerald-950/40 via-slate-950 to-slate-900 pointer-events-none" />
        
        {/* Render Markers */}
        {mockPlaces.map((place) => (
          <MapMarker
            key={place.id}
            place={place}
            isSelected={selectedPlace?.id === place.id}
            onClick={(p) => setSelectedPlace(p)}
          />
        ))}
      </div>

      {/* Floating Selected Place Info Card */}
      {selectedPlace && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl z-30 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-0.5 min-w-0">
              <h4 className="text-white font-extrabold text-sm truncate">{selectedPlace.name}</h4>
              <p className="text-white/60 text-xs flex items-center gap-1">
                <FaMapMarkerAlt className="text-rose-400 text-[10px]" />
                <span className="truncate">{selectedPlace.location}</span>
              </p>
            </div>
            <span className="inline-flex items-center gap-1 shrink-0 bg-amber-400/10 border border-amber-400/20 text-amber-300 px-2.5 py-1 rounded-full text-xs font-bold">
              <FaCreditCard className="text-[9px]" />
              {selectedPlace.damageForTwo}
            </span>
          </div>
          <a
            href={`/places/${selectedPlace.id}`}
            className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-emerald-400 hover:text-slate-950 text-white font-semibold py-2.5 rounded-xl text-xs transition-all duration-300 border border-white/10 hover:border-emerald-300 shadow-lg"
          >
            <span>View Full Logistics</span>
            <FaExternalLinkAlt size={10} />
          </a>
        </div>
      )}
    </div>
  );
};

export default MapView;