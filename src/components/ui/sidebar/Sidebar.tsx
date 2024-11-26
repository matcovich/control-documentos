'use client'
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5"
import Link from 'next/link';
import { secundaryFont } from "@/config/fonts"
import { usePathname } from "next/navigation"
export const Sidebar = () => {

    const router = usePathname();
    const isSideMenuopen = useUIStore((state) => state.isSideMenuOpen);
    const closeMenu = useUIStore((state) => state.closeSideMenu);

    return (
        <div>
            {/* background black */}
            {
                isSideMenuopen && (
                    <div
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-70 md:hidden  transform transition-all duration-300"/>
                )
            }
            {/* Blur */}
            {
                isSideMenuopen && (
                    <div
                    onClick={() => closeMenu()}
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm md:hidden  transform transition-all duration-300"/>
                )
            }

            {/* Sidemenu */}
            <nav
            // todo: efecto de slide
            className={
                clsx(
                    "fixed top-0 left-0 w-[100%]  h-screen z-20 transform transition-all duration-0 md:hidden",
                    {
                        "-translate-x-full": !isSideMenuopen,
                    }
                )
            }
            >
                <IoCloseOutline
                    size={50}
                    className="absolute top-4 right-4 text-white cursor-pointer"
                    onClick={() => closeMenu()}
                />
                <div className="flex flex-col justify-center items-center h-full">

                <div className={`${secundaryFont.className} font-extralight gap-4 -mt-36 text-white flex flex-col items-center text-2xl`}>
                    <Link
                        onClick={() => closeMenu()}
                        href="/"
                        className={`hover:text-orange-200 w-fit  ${router === '/' ? 'border-b-[0.5px] border-white' : ''}`}
                        >
                        <span>Inicio</span>
                    </Link>
                    <Link
                        onClick={() => closeMenu()}
                        href="nuestras-ventajas"
                        className={`hover:text-orange-200 w-fit  ${router === '/nuestras-ventajas' ? 'border-b-[0.5px] border-white' : ''}`}
                        >
                        <span>Nuestras ventajas</span>
                    </Link>
                    <Link
                        onClick={() => closeMenu()}
                        href="areas-de-practica"
                        className={`hover:text-orange-200 w-fit  ${router === '/areas-de-practica' ? 'border-b-[0.5px] border-white' : ''}`}
                        >
                        <span>Areas de practica</span>
                    </Link>
                    <Link
                        onClick={() => closeMenu()}
                        href="equipo"
                        className={`hover:text-orange-200 w-fit  ${router === '/equipo' ? 'border-b-[0.5px] border-white' : ''}`}
                        >
                        <span>El equipo</span>
                    </Link>
                    <Link
                        onClick={() => closeMenu()}
                        href="contacto"
                        className={`hover:text-orange-200 w-fit  ${router === '/contacto' ? 'border-b-[0.5px] border-white' : ''}`}
                        >
                        <span>Contacto</span>
                    </Link>
                </div>
                </div>
            </nav>
        </div>
    )
}
