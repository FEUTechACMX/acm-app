import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import Mailer, { serverDetails } from "./mailer/mailer";
import emailSignin from "./mailer/template/signin";
import { mailerOptions } from "./mailer/mailer";
import regexSchoolEmail from "./regex/schoolEmail";
const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: "/2023/signin",
		verifyRequest: "/2023/verify-request",
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
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	theme: {
		colorScheme: "dark",
		brandColor: "#0b001ac",
		logo: `${process.env.HOST_URL}/android-chrome-256x256.png`,
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