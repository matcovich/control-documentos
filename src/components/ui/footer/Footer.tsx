
import { secundaryFont } from '@/config/fonts'
// import Image from 'next/image'

import {FaRegCopyright } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-slate-300 dark:bg-[#0E0B0A] text-slate-800 dark:text-white border-t border-gray-600">
            <div  className={secundaryFont.className + ' text-lg font-bold container mx-auto px-4 pt-6'}>
                <div className="w-full pb-3">
                    <p className="flex justify-center items-center p-2 gap-2 font-light text-xs lg:text-sm">
                        Copyright  <FaRegCopyright /> RCRSupport 2024
                    </p>
                </div>
            </div>
        </footer>
    )
}
