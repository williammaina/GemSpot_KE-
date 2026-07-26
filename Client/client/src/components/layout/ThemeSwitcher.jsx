import React, { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("gemspot-theme");
    const isDark =
      storedTheme === "dark" ||
      (!storedTheme && document.documentElement.classList.contains("dark"));

    setDarkMode(isDark);

    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("gemspot-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("gemspot-theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/6 bg-white/[0.04] text-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-emerald-400/25 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_0_1px_rgba(16,185,129,0.12)]"
    >
      <span className="relative flex items-center justify-center">
        <HiSun
          className={`absolute text-[18px] text-amber-300 transition-all duration-300 ${
            darkMode ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
        <HiMoon
          className={`absolute text-[18px] text-slate-200 transition-all duration-300 ${
            darkMode ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeSwitcher;