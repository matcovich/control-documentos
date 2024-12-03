'use client'
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

// import * as todosApi from "@/todos/helpers/todos";
// import { useRouter } from "next/navigation";
import { toggleTodo } from "../actions/todo-actions";

interface Props {
    todos?: Todo[];
}

export const TodosGrid = ( { todos = [] }: Props) => {

    // const router = useRouter();

    // const toggleTodo = async (id: string, complete: boolean) => {
    // const updatedTodo = await todosApi.updateTodo(id, complete);

    // router.refresh();
    // return updatedTodo ;
    // }

    return (
        <div className="grid grid-cols-3 gap-4 w-full">
            {
                todos.map( todo => (
                    <TodoItem key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } />
                ))
            }
        </div>
    )
}
