export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'Productos en el carrito',
    description: 'SEo Title',
};

export default async function RestTodosPage() {
    // const session = await getServerSession(authOptions);
    // if (!session) redirect('/api/auth/signin');
    const user = await getUserSessionServer();

    if (!user) {
        redirect('/api/auth/signin');
    }

    const todos = await prisma.todo.findMany({
        where: { userId: user.id },
        orderBy: { description: 'asc' }
    });

    return (
        <div className=" flex flex-col gap-4  ">
            <span className="text-3xl font-bold ">Server Action</span>
            <div className="flex flex-col gap-4 ">
                <NewTodo/>
            </div>
            <TodosGrid todos={todos} />
        </div>
    );
}
