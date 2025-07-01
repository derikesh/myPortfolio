'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ButtonTest() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-2 rounded"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Toggle Theme
    </button>
  );
}