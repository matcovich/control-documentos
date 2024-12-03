'use client'
import { useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

interface Props {
    currentTab?: number;
    tabOptions?: number[]
}

export const TabBar = ( { tabOptions = [1,2,3,4], currentTab = 1 }: Props) => {

    const router = useRouter();

    const [selected, setSelected] = useState(currentTab);

    const onTabSelected = (tab: number) => {
        setSelected(tab);
        Cookies.set('selectedTab', tab.toString()); // Aquí se establece la cookie
        router.refresh()
    }

    return (
    <div className={`grid w-full ${ 'grid-cols-'+tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`} >

        {tabOptions.map( tab => (
            <div key={tab}>
                <input
                    checked={selected === tab}
                    onChange={() =>{}}
                    type="radio"
                    id={tab.toString()}
                    className="peer hidden"
                />
                <label
                onClick={() => onTabSelected(tab)}
                className="text-gray-700 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                    {tab}
                </label>
            </div>
        ))}

    </div>
)
}
