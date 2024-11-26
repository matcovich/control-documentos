// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <div className="text-gray-900 dark:text-red-400">
        The current theme is: {theme}
        <br></br>
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <br></br>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </div>
    )
};
