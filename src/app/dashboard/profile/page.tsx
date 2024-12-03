'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {

    const { data: session } = useSession();

    useEffect(() => {
        console.log('Profile Page');
    }, []);

    return (
        <div>
            <h1>Profile Page</h1>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <div className=" flex   gap-4 flex-col  p-8 shadow-lg">
                <span className="text-3xl font-bold ">Profile Card</span>
                <span>{ session?.user?.name ?? 'No NAME' }</span>
                <span>{ session?.user?.email ?? 'No EMAIL' }</span>
                <span>{ session?.user?.image ?? 'No IMAGE' }</span>
                <span>{ session?.user?.id ?? 'No ID' }</span>
                <span>{ session?.user?.roles?.join(', ') ?? 'No ROLES' }</span>
            </div>
        </div>
    );
}
