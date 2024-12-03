
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { SiServerfault } from "react-icons/si";
import { SidebarItem } from "./SidebarItem";
import { FaCookieBite } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { LogoutButton } from "./LogoutButton";

const menuItems = [
    {
        tittle: "Inicio",
        path: "/dashboard",
        icon: <IoHomeOutline />
    },
    {
        tittle: "Rest TODOS",
        path: "/dashboard/rest-todos",
        icon: <LuListTodo />
    },
    {
        tittle: "Server Action",
        path: "/dashboard/server-todos",
        icon: <SiServerfault />
    },
    {
        tittle: "Cookies",
        path: "/dashboard/cookies",
        icon: <FaCookieBite />
    },
    {
        tittle: "Productos",
        path: "/dashboard/products",
        icon: <GiClothes />

    },

    {
        tittle: "Perfile",
        path: "/dashboard/profile",
        icon: <IoPersonOutline />

    }
]

export const SidebarDashboard = () => {

    return (
        <aside className="fixed  z-20 h-full top-0 left-0  flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-300 dark:border-gray-700 bg-neutral-100 dark:bg-neutral-600 mt-16">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-neutral-100 dark:bg-neutral-600 divide-y divide-slate-300 dark:divide-slate-500 space-y-1">
                    <ul className="space-y-2 pb-2">
                        {menuItems.map((item) => (
                            <SidebarItem key={item.path} {...item}/>
                        ))}
                    </ul>
                    <div className="space-y-2 pt-2">
                        <LogoutButton />
                    </div>
                </div>
                </div>
            </div>
        </aside>
    )
}
