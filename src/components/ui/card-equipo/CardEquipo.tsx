import { IEquipo } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { secundaryFont } from "@/config/fonts"


interface Props {
    equipo: IEquipo
}

export const CardEquipo = ( { equipo }: Props) => {
    return (
        <div className="flex flex-col fade-in  md:mb-8  h-full">
            <div className="relative flex items-center justify-center">
                <div className="absolute rounded w-[97%] h-[94%] bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <Image
                src={`/equipo/${equipo.imagemini}.jpg`}
                alt={equipo.name}
                className=" w-72 md:h-80 object-cover object-top rounded"
                width={200}
                height={200}
                />
            </div>
            <p className="text-[#291F1B] font-normal capitalize text-md  md:text-xl mt-2 md:mt-5">
                { equipo.name }
                <span className="font-bold ml-1">{equipo.lastname}</span>
            </p>
            <Link href={`/equipo/${equipo.id}`} className={`${secundaryFont.className} text-[#EF7C35] font-bold uppercase text-xs md:text-sm`} >Ver más</Link>
        </div>
    )
}
