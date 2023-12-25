import { env } from "@/server/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
import { PrismaClient } from "@prisma/client";
import { getServerSession, type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import Mailer, { mailerOptions, serverDetails } from "./mailer/mailer";
import emailSignin from "./mailer/template/signin";
import regexSchoolEmail from "./regex/schoolEmail";

const prisma = new PrismaClient();

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
		EmailProvider({
			server: mailerOptions,
			from: serverDetails.from,
			async sendVerificationRequest({ identifier: emailAddr, url }) {
				await Mailer({
					recipient: emailAddr,
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
		async signIn({ user }) {
			const email = user.email;
			if (!email) return false;
			if (!regexSchoolEmail.test(email)) return false;
			return true;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */

export const getServerAuthSession = () => getServerSession(authOptions);
