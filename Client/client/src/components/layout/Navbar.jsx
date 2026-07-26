import React, { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || true;
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-emerald-400 border border-neutral-700 transition-colors" aria-label="Toggle Theme">
      {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
    </button>
  );
};

export default ThemeSwitcher;