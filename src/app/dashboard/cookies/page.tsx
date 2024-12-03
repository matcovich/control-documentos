import { cookies } from "next/headers";

import { TabBar } from "@/components"

export const metadata = {
    title: 'Cookies',
    description: 'Cookies',
}

export  default function CookiesPage()  {

    const cookiesStore = cookies();
    const cookieTab = cookiesStore.get('selectedTab')?.value ?? '1';

    return (
        <div className="grid grid-cols-1 gap-4 sm-grid-cols-2">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">Tabs</h1>
                <p className="text-lg">Aquí encontrarás información sobre los cookies que utilizamos en este sitio web.</p>
            </div>
            <TabBar currentTab={Number(cookieTab)} />
        </div>
    )
}
