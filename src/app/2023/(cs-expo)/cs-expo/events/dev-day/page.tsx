"use client";

import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from "../../../components/SpeakerPanelistLayout";
import panelistsData from "@/panelists.json";

export const EventsCSExpo = () => {
	const [currentButton, setCurrentButton] = useState(1);
	const [currentIndex, setCurrentIndex] = useState(0);

	const changeButton = (buttonNumber: number) => {
		setCurrentButton(buttonNumber);
	};

	const speakers = panelistsData.panelists;

	const speakerNames = speakers.map((panelist) => panelist.name);
	const photoNumber = speakers.map((panelist) => panelist.photoNumber);
	const speakerProfession = speakers.map((panelist) => panelist.profession);
	const intOrExt = speakers.map((panelist) => panelist.intOrExt);
	const description = speakers.map((panelists) => panelists.description);
	const photo = speakers.map((panelists) => panelists.photo);

	const changeSpeaker = (direction) => {
		if (direction === "above") {
			setCurrentIndex((prevIndex) =>
				prevIndex - 1 >= 0 ? prevIndex - 1 : speakerNames.length - 1,
			);
		} else if (direction === "below") {
			setCurrentIndex((prevIndex) =>
				prevIndex + 1 < speakerNames.length ? prevIndex + 1 : 0,
			);
		}
	};

	return (
		<main className="flex min-h-screen flex-col mt-0 p-1 sm:mt-14 sm:p-8 lg:p-12">
			<div className="my-24 mx-2 sm:mx-24 sm:my-3 border-l border-black">
				<PhotoComponent
					currentButton={currentButton}
					customText="DEV DAY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. halu halu"
				/>
				<ButtonComponent
					currentButton={currentButton}
					changeButton={changeButton}
				/>
				<h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-10 sm:mb-20">
					DEV DAY
				</h1>
				<hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
				<AboutComponent
					customText="CS EXPO Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    CS EXPO Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					sampleText="Sample Photo"
				/>
				<hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
				<SpeakerPanelistLayout
					speakerNames={speakerNames}
					photoNumber={photoNumber}
					speakerProfession={speakerProfession}
					intOrExt={intOrExt}
					description={description}
					photo={photo}
					panelOrSpeaker="PANELISTS"
				/>
				<hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
				<div className="ms-28">
					<h1 className="font-black text-8xl">PREVIOUS DEV DAY</h1>

					{/* 2022 */}
					<Carousel
						title="2022"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						// Don't forget to change the type of the slides in the Carousel component when changing it to photos
						slides={[
							{ backgroundColor: "var(--timberwolf)" },
							{ backgroundColor: "var(--timberwolf)" },
							{ backgroundColor: "var(--timberwolf)" },
						]}
						perView={2}
						id="carousel-2022"
					/>

					{/* 2023 */}
					<Carousel
						title="2023"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						slides={[
							{ backgroundColor: "var(--timberwolf)" },
							{ backgroundColor: "var(--timberwolf)" },
							{ backgroundColor: "var(--timberwolf)" },
						]}
						perView={2}
						id="carousel-2023"
					/>
				</div>
			</div>
		</main>
	);
};

export default EventsCSExpo;
