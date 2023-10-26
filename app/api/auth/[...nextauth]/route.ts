import { PrismaAdapter } from "@auth/prisma-adapter";
import nextAuth, { AuthOptions } from "next-auth";

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import prisma from "@/lib/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: "356d1482ca409b2f69a8",
      clientSecret: "b77284fbf38287ace61e7a837644af271e085d11",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
