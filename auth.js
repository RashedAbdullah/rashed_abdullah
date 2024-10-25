import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialProviders from "next-auth/providers/credentials";
import { clientPromise } from "./database/client-promise";
import { userModel } from "./models/user-model";
import { mongoDBConnection } from "./database/mongoDBConnection";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProviders({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        await mongoDBConnection();

        try {
          const user = await userModel.findOne({
            email: credentials?.email,
          });
          if (user) {
            const isMatch = user.password === credentials.password;
            if (isMatch) {
              return user;
            } else {
              throw new Error("ইমেইল অথবা পাওসয়ার্ড সঠিক না।");
            }
          } else {
            throw new Error("এডমিনকে খুঁজে পাওয়া যায়নি।");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
});
