import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {

    await prisma.todo.deleteMany();
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
        data: {
            email: 'test1@google.com',
            password: bcrypt.hashSync('123456'),
            roles: ['user', 'admin', 'super-user'],
            todos:{
                create: [
                    { description: 'Piedra del alma', complete: true },
                    { description: 'Piedra del poder'},
                    { description: 'Piedra del tiempo'},
                    { description: 'Piedra de la espacio'},
                    { description: 'Piedra de la realidad'},
                ]
            }
        }
    });


    // await prisma.todo.createMany({
    //     data: [
    //         { description: 'Piedra del alma', complete: true },
    //         { description: 'Piedra del poder'},
    //         { description: 'Piedra del tiempo'},
    //         { description: 'Piedra de la espacio'},
    //         { description: 'Piedra de la realidad'},
    //     ]
    // })


    return  NextResponse.json({message: 'Seed executed'})
}
