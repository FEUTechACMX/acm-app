"use client";

import { NextUIProvider } from "@nextui-org/react";

import ChildrenProps from "types/ChildrenProps";
const NextUIProv: React.FC<ChildrenProps> = ({ children }) => {
	return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUIProv;
