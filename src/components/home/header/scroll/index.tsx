import { useEffect, useState } from "react";

const goToTop = () => {
	window.scrollTo({
		top: 0,
	});
};

const scrollDown = () => {
	window.scrollTo({
		top: window.innerHeight,
	});
};

const Scroll: React.FC = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > window.innerHeight / 2) setShowTopBtn(true);
			else setShowTopBtn(false);
		});
	}, []);
	return (
		<button
			className={"bg-accents p-2 rounded-lg"}
			onClick={() => {
				showTopBtn ? goToTop() : scrollDown();
			}}
		>
			{showTopBtn ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 m-auto"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2.5"
						d="M5 15l7-7 7 7"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 m-auto"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2.5"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			)}
		</button>
	);
};

export default Scroll;
