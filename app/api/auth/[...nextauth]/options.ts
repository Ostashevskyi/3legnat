import type { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import { User } from "@prisma/client";

import { compare } from "bcrypt";

import { prisma } from "@/lib/client";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      authorize: async (credentials): Promise<any> => {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });

          if (!user) {
            return null;
          }

          const isPasswordValid = credentials?.password
            ? await compare(credentials?.password, user.password)
            : false;

          if (!isPasswordValid) {
            return null;
          }

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      const u = user as unknown as User;

      if (user) {
        return {
          ...token,
          id: u.id,
          username: u.username,
          user_id: u.user_id,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
          user_id: token.user_id,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    newUser: "/",
    signOut: "/",
  },
};
