namespace NodeJS {
	// eslint-disable-next-line no-unused-vars
	interface ProcessEnv extends NodeJS.ProcessEnv {
		EMAIL_SERVER_HOST: string;
		EMAIL_SERVER_PORT: string;
		EMAIL_USER: string;
		EMAIL_PASSWORD: string;

		GOOGLE_ID: string;
		GOOGLE_SECRET: string;

		NEXTAUTH_URL: string;
		NEXTAUTH_SECRET: string;
		AUTH_TRUST_HOST: boolean;
	}
}
