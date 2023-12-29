import "next-auth";

import { User as User_T } from "@prisma/client";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface User extends User_T {}
	interface Session {
		user: User;
	}
}

// nextauth.d.ts
declare module "next-auth/jwt" {
	interface JWT {
		user: User;
	}
}
