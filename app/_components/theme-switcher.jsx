"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, MonitorIcon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-yellow-500 dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-blue-400 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex items-center gap-3 px-4 py-2 text-sm cursor-pointer transition-colors ${
            theme === "light"
              ? "bg-gray-100 dark:bg-gray-800 text-primary"
              : "hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          <SunIcon className="h-4 w-4 text-yellow-500" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-3 px-4 py-2 text-sm cursor-pointer transition-colors ${
            theme === "dark"
              ? "bg-gray-100 dark:bg-gray-800 text-primary"
              : "hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          <MoonIcon className="h-4 w-4 text-blue-400" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`flex items-center gap-3 px-4 py-2 text-sm cursor-pointer transition-colors ${
            theme === "system"
              ? "bg-gray-100 dark:bg-gray-800 text-primary"
              : "hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          <MonitorIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
