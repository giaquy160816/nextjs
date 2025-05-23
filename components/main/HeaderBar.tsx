import React from "react";
import { SunIcon, MoonIcon, Cog6ToothIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export default function HeaderBar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
            <div>
                <div className="text-lg font-semibold">Dashboard</div>
                <div className="text-xs text-neutral-400">
                    Dashboard &nbsp; - &nbsp; 
                    <span className="text-neutral-600 dark:text-neutral-300">Dashboard</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-400">Quick Access:</span>
                <button className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    <Squares2X2Icon className="w-5 h-5" />
                </button>
                <button className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    <Cog6ToothIcon className="w-5 h-5" />
                </button>
                <button className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    <SunIcon className="w-5 h-5 hidden dark:inline" />
                    <MoonIcon className="w-5 h-5 dark:hidden" />
                </button>
            </div>
        </header>
    );
} 