import "next-auth";

import { User as User_T } from "@prisma/client";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface User extends User_T {}
}
