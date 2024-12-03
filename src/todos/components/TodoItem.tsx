'use client'

import { startTransition, useOptimistic } from "react";

import { Todo } from "@prisma/client";

import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
    todo: Todo;
    //TODO: acciones que quiero llamar
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}
export const TodoItem = ( { todo, toggleTodo }: Props) => {

    const [ todoOptimistic , toggleTodoOptimistic ] = useOptimistic(
        todo,
        ( state, newCompleteValue: boolean ) => ({ ...state, complete: newCompleteValue })
    );

    const onToggleTodo = async () => {
        try {
            startTransition( () => toggleTodoOptimistic(!todoOptimistic.complete) );
            await toggleTodo(todo.id, !todo.complete);
        } catch (error) {
            startTransition( () => toggleTodoOptimistic(!todoOptimistic.complete) );
        }
    }

    return (
        <div className={ todoOptimistic.complete ? styles.todoDone : styles.todoPending }>
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                <div
                // onClick={ () => toggleTodo(todo.id, !todo.complete) }
                onClick={ onToggleTodo }
                className={`
                    flex rounded-md cursor-pointer
                    hover:bg-opacity-60
                    // ${ todoOptimistic.complete ? 'bg-green-200' : 'bg-red-200' }
                `}>
                    {
                        todoOptimistic.complete
                        ? <IoCheckboxOutline size={30} className="w-6 h-6" color="green" />
                        : <IoSquareOutline size={30} className="w-6 h-6" color="red" />
                    }
                </div>
                <p className="text-lg dark:text-slate-800">{ todoOptimistic.description }</p>
            </div>
        </div>
    )
}
