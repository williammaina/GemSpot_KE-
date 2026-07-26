import React from 'react';

const Avatar = ({ src, alt = 'User Avatar', size = 'md', ring = true, className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-[10px]',
    md: 'w-10 h-10 text-xs',
    lg: 'w-14 h-14 text-sm',
  };

  const getInitials = (str) => {
    if (!str) return 'GK';
    return str
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`rounded-full overflow-hidden flex items-center justify-center font-extrabold bg-slate-800 text-white shrink-0 ${ring ? 'ring-2 ring-emerald-400/30' : ''} border border-white/10 shadow-md ${sizes[size] || sizes.md} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="tracking-wider bg-gradient-to-tr from-slate-900 to-slate-800 w-full h-full flex items-center justify-center text-emerald-400">
          {getInitials(alt)}
        </span>
      )}
    </div>
  );
};

export default Avatar;