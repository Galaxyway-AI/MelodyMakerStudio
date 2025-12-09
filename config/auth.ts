import { compare } from "bcryptjs";
// import  {CredentialsSignin}  from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";

import { testdb } from "@/lib/db/test-db";
import { loginSchema } from "@/lib/validations";

// class InvalidLoginError extends CredentialsSignin {
//   code = "Invalid email or password";
// }

export const authConfig: NextAuthConfig = {
  providers: [
    // GoogleProvider({
    //   clientId: env.GOOGLE_CLIENT_ID,
    //   clientSecret: env.GOOGLE_CLIENT_SECRET,
    // }),
    // GitHubProvider({
    //   clientId: env.GITHUB_CLIENT_ID,
    //   clientSecret: env.GITHUB_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log("credentials ", credentials);
        const validatedFields = loginSchema.safeParse(credentials);

        console.log("validatedFields ", validatedFields);

        if (validatedFields.success) {
          const user = validatedFields.data;

          // const hashedPassword = await hash(user.password, 10);

          // console.log({ password: user.password });
          // console.log({ hashedPassword });

          const dbUser = await testdb.query.users.findFirst({
            where: (u, { eq }) => eq(u.email, user.email),
          });

          console.log("dbUser ", dbUser);

          if (dbUser && dbUser.password) {
            const isValid = await compare(user.password, dbUser.password);

            console.log({ isValid });

            if (isValid) {
              // throw new InvalidLoginError();
              return dbUser;
            }
          }
        }

        console.log("hellooo");

        // throw new InvalidLoginError();
        return null;
      },
    }),
  ],
};
