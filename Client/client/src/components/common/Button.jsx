import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-extrabold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 cursor-pointer backdrop-blur-md';

  const variants = {
    primary: 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]',
    secondary: 'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 shadow-lg',
    ghost: 'bg-transparent hover:bg-white/5 text-white/80 hover:text-white',
    danger: 'bg-rose-500 hover:bg-rose-400 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_25px_rgba(244,63,94,0.5)]',
    accent: 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]',
  };

  const sizes = {
    sm: 'px-3.5 py-2 text-xs',
    md: 'px-5 py-2.5 text-xs font-bold',
    lg: 'px-6.5 py-3.5 text-sm font-extrabold',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;