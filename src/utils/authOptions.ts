import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		// EmailProvider({
		// 	server: serverDetails,
		// 	from: serverDetails.from,
		// 	async sendVerificationRequest({ identifier: emailAddr, url }) {
		// 		await Mailer({
		// 			recipient: emailAddr,
		// 			subject: "Sign in to Markdown Studio",
		// 			html: emailSignin({ url }),
		// 		});
		// 	},
		// }),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	events: {
		// async signIn({}) {},
	},
	callbacks: {
		async signIn({ profile }) {
			return profile?.email?.endsWith("@fit.edu.ph") ?? false;
		},
		// async redirect({ baseUrl }) {
		// 	return baseUrl;
		// },
		// async session({}) {},
		// async jwt({ token }) {
		// 	return token;
		// },
	},
	pages: {
		signIn: "/auth/signin",
		// signOut: "/auth/signout",
		// error: "/auth/error",
		// verifyRequest: "/auth/verify-request",
		// newUser: "/auth/new-user",
	},
	theme: {
		colorScheme: "dark",
		brandColor: "#0b001ac",
		logo: `${process.env.HOST_URL}/android-chrome-256x256.png`,
		buttonText: "#6661ff",
	},
	debug: process.env.NODE_ENV === "development",
};

export default authOptions;
