// @ts-check
/**
 * This file is included in `/next.config.js` which ensures the app isn't built with invalid env vars.
 * It has to be a `.js`-file to be imported there.
 */
import { createEnv } from "@t3-oss/env-nextjs";
import { env as env2 } from "next-runtime-env";
import { z } from "zod";
/*eslint sort-keys: "error"*/

/**
 * @param {number} max
 */
function zodAssert(max, url = false) {
	const res = z.string().trim().min(1).max(max);
	if (url) res.url();
	return res;
}

const env = createEnv({
	client: {
		NEXT_PUBLIC_HOST_URL: zodAssert(50, true),
	},
	emptyStringAsUndefined: true,
	runtimeEnv: {
		AUTH0_CLIENT_ID: env2("AUTH0_CLIENT_ID"),
		AUTH0_CLIENT_SECRET: env2("AUTH0_CLIENT_SECRET"),
		AUTH0_ISSUER: env2("AUTH0_ISSUER"),
		AUTH_URL: env2("AUTH_URL"),
		DATABASE_URL: env2("DATABASE_URL"),
		EMAIL_SERVER_HOST: env2("EMAIL_SERVER_HOST"),
		EMAIL_SERVER_PASSWORD: env2("EMAIL_SERVER_PASSWORD"),
		EMAIL_SERVER_PORT: env2("EMAIL_SERVER_PORT"),
		EMAIL_SERVER_USER: env2("EMAIL_SERVER_USER"),
		GOOGLE_ID: env2("GOOGLE_ID"),
		GOOGLE_SECRET: env2("GOOGLE_SECRET"),
		HOST_URL: env2("HOST_URL"),
		NEXTAUTH_SECRET: env2("NEXTAUTH_SECRET"),
		NEXTAUTH_URL: env2("HOST_URL"),
		NEXT_PUBLIC_HOST_URL: env2("HOST_URL"),
		NODE_ENV: env2("NODE_ENV"),
		POSTGRES_DATABASE: env2("POSTGRES_DATABASE"),
		POSTGRES_HOST: env2("POSTGRES_HOST"),
		POSTGRES_PASSWORD: env2("POSTGRES_PASSWORD"),
		POSTGRES_PRISMA_URL: env2("POSTGRES_PRISMA_URL"),
		POSTGRES_URL: env2("POSTGRES_URL"),
		POSTGRES_URL_NON_POOLING: env2("POSTGRES_URL_NON_POOLING"),
		POSTGRES_USER: env2("POSTGRES_USER"),
	},
	server: {
		AUTH0_CLIENT_ID: zodAssert(100, false),
		AUTH0_CLIENT_SECRET: zodAssert(100, false),
		AUTH0_ISSUER: zodAssert(100, false),
		AUTH_URL: zodAssert(50, true),
		DATABASE_URL: zodAssert(400, true),
		EMAIL_SERVER_HOST: zodAssert(100, false),
		EMAIL_SERVER_PASSWORD: zodAssert(100, false),
		EMAIL_SERVER_PORT: zodAssert(5, false),
		EMAIL_SERVER_USER: zodAssert(100, false),
		GOOGLE_ID: zodAssert(100, false),
		GOOGLE_SECRET: zodAssert(100, false),
		HOST_URL: zodAssert(50, true),
		NEXTAUTH_SECRET: zodAssert(150, false),
		NEXTAUTH_URL: z.preprocess(
			// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
			// Since NextAuth.js automatically uses the VERCEL_URL if present.
			(str) => process.env.VERCEL_URL ?? str,
			// VERCEL_URL doesn't include `https` so it cant be validated as a URL
			process.env.VERCEL ? z.string() : z.string().url(),
		),
		NODE_ENV: z.enum(["development", "test", "production"]),
		POSTGRES_DATABASE: zodAssert(50, false),
		POSTGRES_HOST: zodAssert(100, false),
		POSTGRES_PASSWORD: zodAssert(50, false),
		POSTGRES_PRISMA_URL: zodAssert(200, false),
		POSTGRES_URL: zodAssert(200, false),
		POSTGRES_URL_NON_POOLING: zodAssert(200, false),
		POSTGRES_USER: zodAssert(50, false),
	},
	skipValidation: process.env.NODE_ENV === "production",
});

export default env;
