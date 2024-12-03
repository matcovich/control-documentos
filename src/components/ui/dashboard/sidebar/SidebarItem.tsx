'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation"

interface Props {
    tittle: string;
    path: string;
    icon: React.ReactNode;
}

export const SidebarItem = ({ tittle, path, icon }: Props) => {
    const pathName = usePathname();

    return (
        <li>
            <Link href={ path } className={`
                text-base text-gray-900 dark:text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-200 dark:hover:bg-slate-700 group
                ${pathName === path ? 'bg-gray-200 dark:bg-gray-700' : ''}
            `}>
            { icon }
            <span className="ml-3">{ tittle }</span>
            </Link>
        </li>
    )
}
