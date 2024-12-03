
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";


import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import  CredentialsProvider  from "next-auth/providers/credentials";
import { singInEmailPassword } from "@/auth/actions/auth-actions";

export const authOptions:NextAuthOptions = {

    adapter: PrismaAdapter(prisma) as Adapter,

    // Configure one or more authentication providers
    providers: [
        GithubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Correo electrónico', type: 'email', placeholder: 'usuario@dominio.com'},
                password: { label: 'Contraseña', type: 'password', placeholder: '*********'}
            },
            async authorize(credentials) {
                const user = singInEmailPassword(credentials!.email, credentials!.password);
                if (user) {
                    return user;
                }
                return null;
            }
        }),
    ],

    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async signIn({}) {
            return true;
        },

        async jwt({ token }) {

            const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } });
            if (dbUser?.isActive === false) {
                throw new Error('User is not active');
            }

            token.roles = dbUser?.roles ?? ['no-roles'];
            token.id = dbUser?.id ?? 'no-uuid';
            return token;
        },

        async session({ session, token }) {

            if ( session && session.user) {
                session.user.id = token.id;
                session.user.roles = token.roles;
            }

            return session
        },

    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
