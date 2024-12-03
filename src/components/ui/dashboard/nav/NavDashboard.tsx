import { cookies } from "next/headers";
import Image from "next/image"
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { GoBell } from "react-icons/go";


import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const NavDashboard = async() => {

    const session = await getServerSession(authOptions);

    const avatarUrl = (session?.user?.image)
        ? session.user.image
        : 'https://flowbite.com/docs/images/people/profile-picture-3.jpg';

    const userName = session?.user?.name ?? 'No NAME';
    const userRoles = session?.user?.roles ?? 'client';

    const cookieStore = cookies();
    const cart =  JSON.parse( cookieStore.get('cart')?.value ?? '{}' );

    const getTotalCount = () => {
        let items = 0;
        Object.values(cart).forEach(item => {
            items += Number(item);
        })
        return items;
    };

    return (
        <nav className=" bg-slate-100 dark:bg-gray-600 border-b border-gray-300 dark:border-gray-700 fixed z-30 w-full h-16">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                    <button className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                        <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                        <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <span className="self-center whitespace-nowrap ">LOGO XD</span>
                    </div>
                    <div className="flex items-center gap-4">

                        {/* new activities boton */}
                        <Link href={getTotalCount() > 0 ? '/dashboard/cart' : '#' } >
                            <div className="relative cursor-pointer flex items-center mr-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                                <GoBell className="text-2xl" size={25} />
                                { getTotalCount() > 0
                                && <div className="absolute flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full -top-1 -right-1 dark:bg-red-400">
                                    {getTotalCount()}
                                </div>
                                }
                            </div>
                        </Link>


                        <a className="flex cursor-pointer mr-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                            <span className="sr-only">Open user menu</span>
                            <Image width={40} height={40} className="w-10 h-10 rounded-full"
                            src={ avatarUrl }
                            alt="user photo" />
                            <div className="flex flex-col">
                                <span className="ml-2 font-medium   dark:text-white ">{ userName }</span>
                                <span className=" flex items-center gap-2  ml-2 font-small text-gray-400 dark:text-white capitalize">{Array.isArray(userRoles) ? userRoles.join(', ') : userRoles} <FaChevronDown /></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
