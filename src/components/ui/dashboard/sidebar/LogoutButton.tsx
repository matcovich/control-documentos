'use client'

import { useSession, signOut, signIn } from "next-auth/react"
import { IoLogIn, IoLogOut, IoShieldOutline } from "react-icons/io5"

export const LogoutButton = () => {

    const { data: session, status } = useSession();

    if (status === 'loading') {
        return (
            <div className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                <IoShieldOutline/>
                <span className="ml-4">Espere...</span>
            </div>
        )
    }

    if (status === 'unauthenticated') {
        return (
            <a onClick={() => signIn()} href="/login" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                <IoLogIn/>
                <span className="ml-4">Ingresar</span>
            </a>
        )
    }


    return (
        <a onClick={() => signOut()} href="#" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
            <IoLogOut/>
            <span className="ml-4">Logout</span>
        </a>
    )
}
