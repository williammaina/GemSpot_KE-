import React from 'react';
import { FaCreditCard } from 'react-icons/fa';

const BudgetFilter = ({ selectedBudget, onChange }) => {
  const budgets = [
    { label: 'All Budgets', value: 'all' },
    { label: 'Affordable (< KES 1,500)', value: 'budget' },
    { label: 'Moderate (KES 1.5k - 4k)', value: 'moderate' },
    { label: 'Elite / Luxury (KES 4k+)', value: 'luxury' },
  ];

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
        <FaCreditCard className="text-amber-400 text-xs" /> Filter by Damage (Budget)
      </label>
      <div className="flex flex-wrap gap-2">
        {budgets.map((b) => {
          const isActive = selectedBudget === b.value;
          return (
            <button
              key={b.value}
              type="button"
              onClick={() => onChange(b.value)}
              className={`px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all duration-300 border backdrop-blur-md ${
                isActive
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                  : 'bg-white/5 border-white/10 text-white/75 hover:border-white/20 hover:bg-white/10 hover:text-white'
              }`}
            >
              {b.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetFilter;