"use client";

import { NextUIProvider } from "@nextui-org/react";
import ChildrenProps from "types/ChildrenProps";
import { useRouter } from "next/navigation";
const NextUIProv: React.FC<ChildrenProps> = ({ children }) => {
	const router = useRouter();
	return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};

export default NextUIProv;
