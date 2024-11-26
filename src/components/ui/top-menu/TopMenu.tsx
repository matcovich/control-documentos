'use client'
import { secundaryFont } from "@/config/fonts"
import Link from "next/link"
import MenuIcon from "./MenuIcon"
import { usePathname } from "next/navigation"


export const TopMenu = () => {
    const router = usePathname();
    return (
        <nav className="bg-gray-200 dark:bg-slate-800  w-full h-[94px] border-b border-gray-600">
            <div className="container mx-auto px-4 py-6 flex justify-center md:justify-between items-center w-full h-[94px]">
                {/**Logo */}
                <MenuIcon  />
                <div>
                    <Link href="/">
                        {/* <Image src="./img/logo.svg" alt="logo" width={136} height={100} quality={100} /> */}
                        <h3 className="text-3xl font-bold bg:text-white text-slate-800 dark:text-white uppercase">Logo</h3>
                    </Link>
                </div>

                {/**Menu */}

                <div className={`${secundaryFont.className} font-extralight gap-3 lg:gap-9 text-slate-800 dark:text-white lg:text-lg hidden md:flex`}>
                    <Link href="/"
                    className={`hover:text-blue-400 hover:border-b-[0.5px] hover:border-blue-400 ${router === '/' ? 'border-b-[0.5px] border-slate-800 dark:border-white' : ''}`}
                    >
                        <span>Inicio</span>
                    </Link>
                    <Link href="auth/new-account"
                    className={`hover:text-blue-400 hover:border-b-[0.5px] hover:border-blue-400 ${router === '/auth/new-account' ? 'border-b-[0.5px] border-white' : ''}`}
                    >
                        <span>login</span>
                    </Link>
                </div>

            </div>

        </nav>
    )
}
