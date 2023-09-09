import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import clientPromise from "@/lib/mongo";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import User from "../../../../../models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";

dbConnect()

const handler = NextAuth({
    // adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await User.findOne({ email: email });

                if (!user) {
                    throw new Error("You haven't registered yet!");
                }
                if (user) {
                    return signInUser({ user, password });
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
    database: process.env.MONGODB_URI,
    secret: "secret",
    callbacks: {
        async jwt({ token, user }) {

            if (user?.id) {
                token.id = user.id
            }
            if (user?.userName) {
                token.userName = user.userName;
            }
            return token
        },
        async session({ session, token }) {
            session.id = token.id;
            // session.userName = token.userName;
            return session;
        }
    }
})


const signInUser = async ({ user, password }) => {
    const isMAtch = await bcrypt.compare(password, user.password);
    if (!isMAtch) {
        throw new Error("Incorrect password!");
    }
    return user;
};

export { handler as GET, handler as POST }