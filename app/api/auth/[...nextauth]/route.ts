import { PrismaAdapter } from "@auth/prisma-adapter";
import nextAuth, { AuthOptions } from "next-auth";

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import prisma from "@/lib/prismadb";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email
          }
        });
        if (!user || !user.id || !user.hashedPassword) {
          return null
        }
        const correctPassword = await bcrypt.compare(credentials.password, user.hashedPassword);
        if (!correctPassword) {
          return null
        }

        return user;
      }

    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    // async session({ session, token }) {
    //   session.user.id = token.userId;
    //   return session;
    // },
  },

secret: process.env.NEXTAUTH_SECRET,
};
const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
