"use client";

import { useTheme } from "@/containers/theme-context";
import React from "react";
import Switch from "./switch";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5">
      <Switch
        activeButton={theme === "light" ? <Sun /> : <Moon />}
        hiddenButton={
          theme === "light" ? <Moon size={14} /> : <Sun size={14} />
        }
        setActiveButton={toggleTheme}
      />
    </div>
  );
}
