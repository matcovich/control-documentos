'use client'
import { Switch } from "@nextui-org/react";
import { ReactNode, useEffect, useState } from "react";
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi";
import { useTheme } from "next-themes";

const Switcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleSwitch = (isSelected: boolean, classname: string):ReactNode => {
        if (isSelected) {
            setTheme('light')
            return <PiSunDuotone className={classname} />
        } else {
            setTheme('dark')
            return <PiMoonDuotone className={classname} />
        }
    }

    if(!mounted) return null;

    return (
        <div className="fixed right-4 top-1/2  transform  -translate-y-1/2 opacity-20 hover:opacity-100">
            <Switch
                defaultSelected ={theme === 'light' ? true : false}
                size="sm"
                color="warning"
                thumbIcon={({ isSelected, className })=>handleSwitch( isSelected, className)}
            />
        </div>
    );
};

export default Switcher
