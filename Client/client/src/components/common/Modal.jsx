import React from 'react';
import { HiX } from 'react-icons/hi';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose} 
      />

      {/* Glass Modal Box */}
      <div className="relative bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl z-50 text-white animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-white/10 bg-white/5">
          <h3 className="font-extrabold text-xs tracking-wider uppercase text-emerald-400">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/10"
            aria-label="Close modal"
          >
            <HiX size={16} />
          </button>
        </div>
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;