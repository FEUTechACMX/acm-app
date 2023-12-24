"use client";

import { SessionProvider } from "next-auth/react";
import ChildrenProps from "types/ChildrenProps";
const NextAuthProvider: React.FC<ChildrenProps> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
