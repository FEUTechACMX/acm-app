"use client";

import { NextUIProvider } from "@nextui-org/react";

interface Props {
	children: React.ReactNode;
}
const NextUIProv: React.FC<Props> = ({ children }) => {
	return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUIProv;
