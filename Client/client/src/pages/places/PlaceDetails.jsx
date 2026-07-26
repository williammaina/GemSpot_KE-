import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar, FaShieldAlt, FaWifi, FaParking, FaCreditCard, FaClock, FaHeart, FaShareAlt, FaSmile } from "react-icons/fa";
import MapView from "../../components/map/MapView";

const PlaceDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const place = {
    id: id || '101',
    name: "CJ's Restaurant & Gastrobar",
    tagline: 'Premier family dining & artisanal coffee experience',
    location: 'Village Market, Gigiri, Nairobi',
    rating: 4.9,
    reviewsCount: 128,
    damage: 'KES 5,500/- for two',
    wifi: 'High Speed (100 Mbps)',
    parking: 'Valet & Secure Basement',
    mpesa: 'Accepted / Instant Till',
    hours: 'Mon - Sun: 7:00 AM - 11:00 PM',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop',
    ],
    vibe: {
      noise: 'Moderate & Conversational',
      crowd: 'Families, Professionals & Couples',
      lighting: 'Warm, Ambient & Sophisticated',
      energy: 'Relaxed & Welcoming'
    },
    reviews: [
      { id: 1, user: 'Amina Mwangi', rating: 5, date: '2 days ago', comment: 'Absolute masterpiece of a dining experience! The service is world-class and the ambiance is unmatched.' },
      { id: 2, user: 'Brian Kiprop', rating: 4.8, date: '1 week ago', comment: 'Great Wi-Fi for remote work during the afternoon, turns into an amazing lively dinner spot by evening.' }
    ],
    related: [
      { id: '102', name: 'Artcaffé Gastrobar', location: 'Westlands', damage: 'KES 4,800/-', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop' },
      { id: '201', name: 'Alchemist Bar', location: 'Westlands', damage: 'KES 6,000/-', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&auto=format&fit=crop' }
    ]
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
      {/* Large Top Image / Gallery Header */}
      <div className="relative h-72 sm:h-[450px] w-full overflow-hidden bg-neutral-900">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover filter brightness-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
        
        <div className="absolute top-6 left-6 right-6 max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/explore/eats" className="bg-neutral-950/80 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-2xl text-xs font-bold hover:bg-neutral-900 transition-all">
            ← Back to Exploration
          </Link>
          <div className="flex gap-3">
            <button className="p-3 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-white/10 text-white hover:text-emerald-400 transition-all shadow-lg">
              <FaHeart size={16} />
            </button>
            <button className="p-3 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-white/10 text-white hover:text-emerald-400 transition-all shadow-lg">
              <FaShareAlt size={16} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 max-w-6xl mx-auto space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-emerald-400 text-neutral-950 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-lg">
              <FaShieldAlt size={10} /> Verified GemSpot
            </span>
            <div className="bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-amber-400 flex items-center gap-1 border border-white/10">
              <FaStar size={11} /> <span>{place.rating} ({place.reviewsCount} reviews)</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{place.name}</h1>
          <p className="text-white/70 text-xs sm:text-sm font-medium flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-emerald-400" /> {place.location}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Tabs & Segmented Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-neutral-800">
            {['overview', 'vibe', 'reviews', 'map'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/20'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          {activeTab === 'overview' && (
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-8 rounded-3xl space-y-6 shadow-xl">
              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-emerald-400 uppercase tracking-widest">About This Spot</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {place.tagline}. Located in one of Nairobi's most accessible cultural and commercial hubs, {place.name} delivers exceptional culinary mastery, handcrafted beverages, and immaculate hospitality in a serene setting.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
                <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">Wi-Fi Access</span>
                  <span className="text-xs font-bold text-emerald-400">{place.wifi}</span>
                </div>
                <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">Parking</span>
                  <span className="text-xs font-bold text-white">{place.parking}</span>
                </div>
                <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">Payments</span>
                  <span className="text-xs font-bold text-emerald-400">{place.mpesa}</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800">
                <h3 className="text-sm font-extrabold text-white">Gallery Preview</h3>
                <div className="grid grid-cols-2 gap-4">
                  {place.gallery.map((img, index) => (
                    <div key={index} className="h-40 rounded-2xl overflow-hidden border border-neutral-800">
                      <img src={img} alt="gallery preview" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vibe' && (
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-8 rounded-3xl space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <FaSmile size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Vibe Check & Ambiance</h3>
                  <p className="text-xs text-neutral-400">Curated community insights on the atmosphere and energy.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-neutral-500">Noise Level</span>
                  <p className="text-sm font-bold text-white">{place.vibe.noise}</p>
                </div>
                <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-neutral-500">Typical Crowd</span>
                  <p className="text-sm font-bold text-white">{place.vibe.crowd}</p>
                </div>
                <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-neutral-500">Lighting & Tone</span>
                  <p className="text-sm font-bold text-white">{place.vibe.lighting}</p>
                </div>
                <div className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-neutral-500">Overall Energy</span>
                  <p className="text-sm font-bold text-emerald-400">{place.vibe.energy}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-8 rounded-3xl space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Verified Explorer Reviews</h3>
                  <p className="text-xs text-neutral-400">Real feedback from verified GemSpot visitors.</p>
                </div>
                <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-500/20">
                  Write Review
                </button>
              </div>

              <div className="space-y-4 pt-2">
                {place.reviews.map((rev) => (
                  <div key={rev.id} className="bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{rev.user}</span>
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                        <FaStar size={11} /> <span>{rev.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">{rev.comment}</p>
                    <span className="text-[10px] text-neutral-500 block">{rev.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'map' && (
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white">Interactive Location Map</h3>
              <div className="h-72 rounded-2xl overflow-hidden border border-neutral-800">
                <MapView />
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Logistics Side Panel */}
        <div className="space-y-6">
          <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-3xl space-y-6 shadow-2xl sticky top-6">
            <div className="space-y-2 border-b border-neutral-800 pb-4">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-emerald-400">Logistics Summary</span>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400 flex items-center gap-1.5 font-medium">
                  <FaCreditCard className="text-emerald-400" /> Damage for Two
                </span>
                <span className="text-sm font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  {place.damage}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-emerald-400 mt-0.5">
                  <FaClock />
                </div>
                <div>
                  <span className="text-neutral-400 uppercase font-bold text-[10px] block">Operating Hours</span>
                  <span className="text-white font-semibold">{place.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-emerald-400 mt-0.5">
                  <FaWifi />
                </div>
                <div>
                  <span className="text-neutral-400 uppercase font-bold text-[10px] block">Wi-Fi Quality</span>
                  <span className="text-white font-semibold">{place.wifi}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-emerald-400 mt-0.5">
                  <FaParking />
                </div>
                <div>
                  <span className="text-neutral-400 uppercase font-bold text-[10px] block">Parking Details</span>
                  <span className="text-white font-semibold">{place.parking}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-extrabold text-xs transition-all shadow-lg shadow-emerald-500/20">
                Get Directions & Navigation
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Related Places Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Similar Verified Spots Nearby</h3>
            <p className="text-xs text-neutral-400">Explore other recommended destinations handpicked for you.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {place.related.map((spot) => (
            <Link key={spot.id} to={`/places/${spot.id}`} className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden group hover:border-emerald-500/50 transition-all shadow-xl flex items-center gap-4 p-4">
              <div className="relative h-24 w-24 rounded-2xl overflow-hidden bg-neutral-950 shrink-0">
                <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] text-emerald-400 uppercase font-extrabold">Recommended</span>
                <h4 className="text-white font-bold text-sm group-hover:text-emerald-400 transition-colors">{spot.name}</h4>
                <p className="text-neutral-400 text-xs">{spot.location}</p>
                <span className="text-xs font-bold text-emerald-400 block pt-1">Damage: {spot.damage}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;