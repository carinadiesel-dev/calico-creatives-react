import NextAuth, {AuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {loginSchema} from "@/schemas/auth";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, request) => {
        const creds = await loginSchema.parseAsync(credentials);

        console.log(creds);

        const user = {
          username: "Bob",
          password: "1234",
          email: "test@email.com",
          id: "123"
        }

        if (!user) {
          return null;
        }

        const isValidPassword = true;

        if (!isValidPassword) {
          return null;
        }



        return {
          id: user.id,
          email: user.email,
          username: user.username,
        };
      },
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        // session.id = token.id;
      }

      return session;
    },
  },
  jwt: {
    secret: "super-secret",
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
  pages: {
    signIn: "/",
    newUser: "/signup",
  }
}
export default NextAuth(authOptions)