import { env } from "@/server/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";
import Mailer, { mailerOptions, serverDetails } from "./mailer/mailer";
import emailSignin from "./mailer/template/signin";
import { prisma } from "./prisman";

import regexSchoolEmail from "./regex/schoolEmail";

export const authOptions: NextAuthOptions = {
	// https://stackoverflow.com/a/76585568
	adapter: PrismaAdapter(prisma) as Adapter,
	pages: {
		signIn: "/2023/signin",
		verifyRequest: "/2023/verify-request",
		error: "/2023/error",
		signOut: "/2023/signout",
	},
	providers: [
		Auth0Provider({
			clientId: env.AUTH0_CLIENT_ID,
			clientSecret: env.AUTH0_CLIENT_SECRET,
			issuer: env.AUTH0_ISSUER,
		}),
		EmailProvider({
			server: mailerOptions,
			from: serverDetails.from,
			async sendVerificationRequest({ identifier, url }) {
				await Mailer({
					recipient: identifier,
					subject: "Sign in to FEU Tech ACM-X",
					html: emailSignin({ url }),
				});
			},
		}),
		GoogleProvider({
			clientId: env.GOOGLE_ID,
			clientSecret: env.GOOGLE_SECRET,
		}),
	],
	theme: {
		colorScheme: "dark",
		brandColor: "#0b001ac",
		logo: `${env.HOST_URL}/android-chrome-256x256.png`,
		buttonText: "#6661ff",
	},
	callbacks: {
		jwt({ user, token }) {
			if (user) token.user = user;

			return token;
		},
		session({ session, token }) {
			if (token && session.user)
				session.user.userTypeId = token.user.userTypeId;

			return session;
		},
		async signIn({ user }) {
			const email = user.email;
			if (!email) return false;
			if (regexSchoolEmail.test(email)) user.userTypeId = 4;
			else user.userTypeId = 2;
			return true;
		},
		// async session({user, session}) {
		// 	session.user.userTypeId = user.userTypeId;
		// 	return session;
		// },
	},
	session: { strategy: "jwt" },
	debug: process.env.NODE_ENV === "development",
	secret: env.NEXTAUTH_SECRET,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */

export const getServerAuthSession = () => getServerSession(authOptions);
