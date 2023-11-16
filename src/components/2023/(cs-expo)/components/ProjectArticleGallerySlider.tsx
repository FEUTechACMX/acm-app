"use client";

import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import React, { useState, useEffect } from "react";

interface Slide {
	link: string;
}

interface GallerySliderProps {
	slides: Slide[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ slides }) => {
	const [isMaxSlideUp, setIsMaxSlideUp] = useState(true);
	const [isMaxSlideDown, setIsMaxSlideDown] = useState(false);

	useEffect(() => {
		const splideOptions = {
			type: "slide",
			arrows: false,
			gap: 20,
			height: "100px",
			direction: "ttb",
		};
		const splide = new Splide("#my_splide", splideOptions);
		const slideUp = document.getElementById("slideup");
		const slideDown = document.getElementById("slidedown");

		slideUp?.addEventListener("click", () => {
			splide.go("-1");
		});

		slideDown?.addEventListener("click", () => {
			splide.go("+1");
		});

		splide.on(["mounted", "move"], () => {
			const currentIndex = splide.index;

			const slideElements = document.querySelectorAll("#slide-card");

			slideElements.forEach((slide, index) => {
				slide.classList.remove("border-4", "border-coral-pink");

				if (index === currentIndex) {
					slide.classList.add("border-4", "border-coral-pink");
				}
			});

			setIsMaxSlideUp(currentIndex === 0);
			setIsMaxSlideDown(slideElements.length === currentIndex + 1);
		});

		splide.on(["click"], (slide: { index: any }, e: any) => {
			splide.go(slide.index);
		});

		splide.mount();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center">
			<div id="slideup" className="flex justify-center h-[30px] w-[30px]">
				{!isMaxSlideUp && (
					<button className="flex items-top justify-center text-coral-pink cursor-pointer text-3xl font-bold">
						<AiOutlineUp />
					</button>
				)}
			</div>

			<div id="my_splide" className="splide h-[250px] w-full overflow-hidden">
				<div className="splide__track">
					<ul className="splide__list h-[100px]">
						{slides.map((slide) => (
							<li className="splide__slide flex justify-center">
								<div
									id="slide-card"
									className="h-[108px] flex justify-center items-center"
								>
									<img src={slide.link} className="w-48 h-[100px]"></img>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div id="slidedown" className="flex justify-center h-[30px] w-[30px]">
				{!isMaxSlideDown && (
					<button className="flex items-top justify-center text-coral-pink cursor-pointer text-3xl font-bold">
						<AiOutlineDown />
					</button>
				)}
			</div>
		</div>
	);
};

export default GallerySlider;
