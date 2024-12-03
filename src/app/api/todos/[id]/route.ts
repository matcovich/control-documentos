import { getUserSessionServer } from '@/auth/actions/auth-actions';
import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { NextResponse, } from 'next/server'
import * as Yup from 'yup';

interface Segments {
    params: {
        id: string;
    };
}

const getTodo = async (id: string) :Promise<Todo  | null> => {
    const user = await getUserSessionServer();

    if (!user) {
        return null;
    }

    const todo =await prisma.todo.findFirst({ where: { id } });
    if( todo?.userId !== user.id ) {
        return null;
    }

    return todo;

}

export async function GET(request: Request, { params }: Segments) {

    // retornar el todo segun el id
    const todo = await getTodo(params.id);

    if  (!todo) {
        return NextResponse.json({ message: 'Todo with id ' + params.id + ' not found' }, { status: 404 });
    }

    return NextResponse.json({ todo })
}

const putSchema = Yup.object({
    description: Yup.string(),
    complete: Yup.boolean().optional().default(false),
})

export async function PUT (request: Request, { params }: Segments) {

    const todo = await getTodo(params.id);

    if (!todo) {
        return NextResponse.json({ message: 'Todo with id ' + params.id + ' not found' }, { status: 404 });
    }

    try {
        const { complete, description } = await putSchema.validate (await request.json());

        const updatedTodo = await prisma.todo.update({
            where: { id: params.id },
            data: { complete, description }
        });

        return NextResponse.json(updatedTodo);
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            return NextResponse.json({ message: error.message }, { status: 400 });
        }
    }
}


