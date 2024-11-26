import { NavDashboard, SidebarDashboard } from "@/components";

export default function WebLayout({ children }: { children: React.ReactNode;}) {
    return (
        <main className="">
            <NavDashboard/>
            <div className="flex overflow-hidden bg-white dark:bg-gray-500 pt-16">
                <SidebarDashboard />
                <div className="min-h-[calc(100vh-64px)] w-full relative overflow-y-auto lg:ml-64">
                    <main className="p-4">
                        {children}
                    </main>
                </div>
            </div>
        </main>
    );
}
