import { useEffect, useState } from "react";
import Dark from '@/assets/dark.svg?react';
import Light from '@/assets/light.svg?react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/25"
    >
      {isDark ? <Dark width={24} height={24} className="text-white"/> : <Light width={24} height={24} className="text-black "/>}
    </button>
  );
}
