export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export default async function RestTodosPage() {

    // const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
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
            <div className="flex flex-col gap-4 ">
                <NewTodo/>
            </div>
            <TodosGrid todos={todos} />
        </div>
    );
}
