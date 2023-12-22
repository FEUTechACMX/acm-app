import React from "react";

interface Props {
	children: React.ReactNode;
}

const InlineFont: React.FC<Props> = ({ children }) => {
	return (
		<span className="flex justify-center items-center gap-1">
			{children}
		</span>
	);
};

export default InlineFont;
