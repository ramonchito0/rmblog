import { PrismaAdapter } from "@auth/prisma-adapter";
import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default nextAuth(authOptions);

export const getAuthSession = () => getServerSession(authOptions);
