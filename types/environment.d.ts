namespace NodeJS {
	// eslint-disable-next-line no-unused-vars
	interface ProcessEnv extends NodeJS.ProcessEnv {
		HOST_URL: string;

		EMAIL_SERVER_HOST: string;
		EMAIL_SERVER_PORT: string;
		EMAIL_SERVER_USER: string;
		EMAIL_SERVER_PASSWORD: string;

		GOOGLE_ID: string;
		GOOGLE_SECRET: string;

		NEXTAUTH_SECRET: string;
		AUTH_TRUST_HOST: boolean;

		POSTGRES_URL: string;
		POSTGRES_PRISMA_URL: string;
		POSTGRES_URL_NON_POOLING: string;
		POSTGRES_USER: string;
		POSTGRES_HOST: string;
		POSTGRES_PASSWORD: string;
		POSTGRES_DATABASE: string;
	}
}
