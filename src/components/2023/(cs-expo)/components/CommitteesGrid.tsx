"use client";
import React, { useState } from "react";

const CommitteesGrid = () => {
	const committeeNames = [
		"PROGRAMS COMMITTEE",
		"SECRETARIAT COMMITTEE",
		"SPONSORSHIP & PARTNERSHIP COMMITTEE",
		"SPEAKERS AND PANELIST COMMITTEE",
		"LOGISTICS COMMITTEE",
		"PUBLICITY & PUBLICATION COMMITTEE",
		"CREATIVES & MEDIA COMMITTEE",
		"DEVELOPERS COMMITTEE",
	];

	const [hovered, setHovered] = useState<number | null>(null);

	const handleMouseEnter = (index: number) => {
		setHovered(index);
	};

	const handleMouseLeave = () => {
		setHovered(null);
	};

	return (
		<div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 ml-28 sm:ml-40 md:ml-28 mt-4">
			{committeeNames.map((committeeName, index) => (
				<div
					key={index}
					className={`p-4 bg-coral-pink text-white text-center sm:text-right font-bold relative transform scale-100 hover:scale-105 ${
						hovered === index ? "scale-105" : ""
					}`}
					onMouseEnter={() => handleMouseEnter(index)}
					onMouseLeave={handleMouseLeave}
					style={{ width: "89%", minHeight: "250px" }}
				>
					<div className="font-bold text-1xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
						{committeeName}
					</div>
					<a
						href="#"
						className="text-sm sm:text-base absolute bottom-4 right-4 text-white no-underline cursor-pointer font-bold"
					>
						LEARN MORE &gt;
					</a>
				</div>
			))}
		</div>
	);
};

export default CommitteesGrid;
