import { NextPage } from "next";
import React from "react";

interface Props {
	index: number;
	nodes: React.ReactNode[];
}

const ComponentStack: NextPage<Props> = ({ nodes, index }) => {
	const stack: React.ReactNode[] = [...nodes];
	// render current stack index
	return stack[index];
};

export default ComponentStack;
