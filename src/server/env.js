// @ts-check
/**
 * This file is included in `/next.config.js` which ensures the app isn't built with invalid env vars.
 * It has to be a `.js`-file to be imported there.
 */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/*eslint sort-keys: "error"*/

function stringTrim() {
	return z.string().trim();
}

export const env = createEnv({
	client: {
		NEXT_PUBLIC_HOST_URL: stringTrim().min(1).max(50).url(),
	},
	emptyStringAsUndefined: true,
	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
		EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
		EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
		EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
		EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
		GOOGLE_ID: process.env.GOOGLE_ID,
		GOOGLE_SECRET: process.env.GOOGLE_SECRET,
		HOST_URL: process.env.HOST_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL,
		NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
		NODE_ENV: process.env.NODE_ENV,
		POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
		POSTGRES_HOST: process.env.POSTGRES_HOST,
		POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
		POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
		POSTGRES_URL: process.env.POSTGRES_URL,
		POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
		POSTGRES_USER: process.env.POSTGRES_USER,
	},
	server: {
		DATABASE_URL: stringTrim().min(1).max(400).url(),
		EMAIL_SERVER_HOST: stringTrim().min(1).max(100),
		EMAIL_SERVER_PASSWORD: stringTrim().min(1).max(100),
		EMAIL_SERVER_PORT: stringTrim().min(1).max(5),
		EMAIL_SERVER_USER: stringTrim().min(1).max(100).email("Invalid email"),
		GOOGLE_ID: stringTrim().min(1).max(100),
		GOOGLE_SECRET: stringTrim().min(1).max(100),
		HOST_URL: stringTrim().min(1).max(50).url(),
		// base 64 encoded string
		NEXTAUTH_SECRET: stringTrim().min(1).max(150),
		NEXTAUTH_URL: z.preprocess(
			// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
			// Since NextAuth.js automatically uses the VERCEL_URL if present.
			(str) => process.env.VERCEL_URL ?? str,
			// VERCEL_URL doesn't include `https` so it cant be validated as a URL
			process.env.VERCEL ? z.string() : z.string().url(),
		),
		NODE_ENV: z.enum(["development", "test", "production"]),
		POSTGRES_DATABASE: stringTrim().min(1).max(50),
		POSTGRES_HOST: stringTrim().min(1).max(100),
		POSTGRES_PASSWORD: stringTrim().min(1).max(50),
		POSTGRES_PRISMA_URL: stringTrim().min(1).max(200),
		POSTGRES_URL: stringTrim().min(1).max(200),
		POSTGRES_URL_NON_POOLING: stringTrim().min(1).max(200),
		POSTGRES_USER: stringTrim().min(1).max(50),
	},
});
