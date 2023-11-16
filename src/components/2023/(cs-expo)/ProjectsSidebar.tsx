"use client";
import { useEffect, useState } from "react";

const Sidebar = ({ sideBarCallback }) => {
	const [showArrow, setShowArrow] = useState(false);
	const [showArrowColor, setShowArrowColor] = useState("coral-pink");

	const handleScrollUp = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleBoxClick = (boxNumber) => {
		// Action
		sideBarCallback(boxNumber);
	};

	const handleScroll = () => {
		const offset = window.scrollY;
		setShowArrow(offset > 0);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center">
			{showArrow && (
				<div
					className="text-coral-pink font-extrabold text-8xl cursor-pointer"
					onClick={handleScrollUp}
					onMouseEnter={() => setShowArrowColor("black")}
					onMouseLeave={() => setShowArrowColor("coral-pink")}
				>
					<div
						className={`w-15 h-20 text-${showArrowColor} transition duration-300 ease-in-out`}
					>
						^
					</div>
				</div>
			)}
			<div className="mb-2 mr-5 ml-5 flex-col text-white items-center justify-center">
				{[
					"All",
					"Data Analytics",
					"Education",
					"Health",
					"Img Proc - CV",
					"IOT",
					"NLP",
				].map((boxNumber) => (
					<div
						key={boxNumber}
						className="w-40 h-10 bg-coral-pink mb-2 flex items-center justify-center cursor-pointer hover:bg-black transition duration-300 ease-in-out"
						onClick={() => handleBoxClick(boxNumber)}
					>
						{boxNumber}
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
