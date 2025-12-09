import { redirect } from "next/navigation";
// import { DrizzleAdapter } from "@auth/drizzle-adapter";
// import { eq } from "drizzle-orm";
import NextAuth from "next-auth";

// import type { Adapter } from "next-auth/adapters";

import { authConfig } from "@/config/auth";
import { testdb } from "./db/test-db";

export const {
  handlers,
  auth,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth({
  ...authConfig,

  // adapter: DrizzleAdapter(db) as Adapter,

  session: {
    strategy: "jwt",
    // maxAge: 86400, // 24 hours
  },

  pages: {
    signIn: "/adminlogin",
    // newUser: "/signup",
  },

  events: {
    // linkAccount: async ({ user }) => {
    //   await db
    //     .update(users)
    //     .set({ emailVerified: new Date() })
    //     .where(eq(users.id, user.id!));
    // },
  },

  callbacks: {
    jwt: async ({ token }) => {
      const user = await testdb.query.users.findFirst({
        where: (u, { eq }) => eq(u.id, token.sub!),
      });

      if (user) {
        const {
          id,
          email,
          // name,
          // username,
          // image: picture
        } = user;

        token = {
          ...token,
          id,
          email,
          // name,
          // username,
          // picture,
        };
      }

      return token;
    },

    session: async ({ session, token }) => {
      if (token.sub && session.user) {
        const {
          id,
          email,
          // name,
          // username,
          // picture: image
        } = token;

        session.user = {
          ...session.user,
          id,
          email,
          // name,
          // username,
          // image,
        };
      }

      return session;
    },
  },
});

/**
 * Gets the current user from the server session
 *
 * @returns The current user
 */
export async function getUser() {
  const session = await auth();
  return session?.user;
}

/**
 * Checks if the current user is authenticated
 * If not, redirects to the login page
 */
export const checkAuth = async () => {
  const session = await auth();
  if (!session) redirect("/adminlogin");
};
