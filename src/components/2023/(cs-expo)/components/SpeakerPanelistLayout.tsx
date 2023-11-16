import React, { useState } from "react";
import {
	AiOutlineUp,
	AiOutlineDown,
	AiOutlineLeft,
	AiOutlineRight,
} from "react-icons/ai";

interface SpeakerPanelistLayoutProps {
	speakerNames: string[];
	photoNumber: string[];
	speakerProfession: string[];
	intOrExt: string[];
	panelOrSpeaker: string;
	description: string[];
	photo: string[];
}

const SpeakerPanelistLayout: React.FC<SpeakerPanelistLayoutProps> = ({
	speakerNames,
	photoNumber,
	speakerProfession,
	intOrExt,
	panelOrSpeaker,
	description,
	photo,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const changeButton = (direction: string) => {
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
		<div>
			{/* WEB VIEW */}
			<div className="ms-1 me-1 p-10 hidden lg:block">
				{/* Title */}
				<h1 className="font-black text-8xl mb-5 ml-10 text-right">
					{panelOrSpeaker}
				</h1>

				{/* Grid Wrapper */}
				<div className="grid grid-cols-1 grid-cols-3">
					{/* Profession and Description Grid */}
					<div className="col-span-1 p-4 ml-20 mb-14 text-right">
						<h1 className="font-black text-6xl">
							{speakerProfession[currentIndex]}
						</h1>
						<h2 className="font-black text-2xl text-right mt-4 font-sans">
							{intOrExt[currentIndex]}
						</h2>
						<p className="font-medium text-2x1 text-right mt-10">
							{description[currentIndex]}
						</p>
					</div>

					{/* Photo Grid */}
					<div className="col-span-1 relative flex justify-center items-center">
						<div className="p-5 bg-timberwolf w-80 h-96 ml-10 relative">
							{photo && photo.length > 0 && (
								<img
									src={photo[currentIndex]}
									alt="Speaker's Photo"
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
								/>
							)}
						</div>
					</div>

					{/* Panelist's Names Grid */}
					<div className="col-span-1 p-5 ml-10 justfiy-center">
						<div className="text-right pr-40 text-coral-pink ml-20">
							<button onClick={() => changeButton("above")}>
								<AiOutlineUp className="stroke-current w-10 h-12" />
							</button>
						</div>
						<h1 className="font-black text-4xl text-right mt-1 mr-10 font-sans opacity-10">
							{
								speakerNames[
									(currentIndex - 3 + speakerNames.length) % speakerNames.length
								]
							}
						</h1>
						<h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-25">
							{
								speakerNames[
									(currentIndex - 2 + speakerNames.length) % speakerNames.length
								]
							}
						</h1>
						<h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-50">
							{
								speakerNames[
									(currentIndex - 1 + speakerNames.length) % speakerNames.length
								]
							}
						</h1>
						<h1 className="font-black text-6xl text-coral-pink mt-5 mb-3 mr-10 ml-10 text-right font-sans">
							{speakerNames[currentIndex]}
						</h1>
						<h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-50">
							{speakerNames[(currentIndex + 1) % speakerNames.length]}
						</h1>
						<h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-50">
							{speakerNames[(currentIndex + 2) % speakerNames.length]}
						</h1>
						<h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-25">
							{speakerNames[(currentIndex + 3) % speakerNames.length]}
						</h1>
						<h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-10">
							{speakerNames[(currentIndex + 4) % speakerNames.length]}
						</h1>
						<div className="text-right pr-40 text-coral-pink ml-20">
							<button onClick={() => changeButton("below")}>
								<AiOutlineDown className="stroke-current w-10 h-12" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* MOBILE VIEW */}
			<div className="md:ms-1 md:me-1 mx-7 mb-10 lg:hidden">
				{/* Title */}
				<h1 className="font-black text-5xl text-center">{panelOrSpeaker}</h1>

				{/* Grid Wrapper */}
				<div className="grid grid-cols-1 grid-cols-1">
					{/* Panelist's Names Grid */}
					<div className="col-span-1 justfiy-center">
						<div className="grid grid-cols-8 pb-4 pt-2">
							<div className="col-span-1 text-center text-coral-pink">
								<button onClick={() => changeButton("above")}>
									<AiOutlineLeft className="stroke-current w-12 h-12" />
								</button>
							</div>
							<h1 className="col-span-6 font-black text-2xl pt-2 text-coral-pink text-center font-sans">
								{speakerNames[currentIndex]}
							</h1>
							<div className="col-span-1 text-center text-coral-pink">
								<button onClick={() => changeButton("below")}>
									<AiOutlineRight className="stroke-current w-12 h-12" />
								</button>
							</div>
						</div>
					</div>

					{/* Photo Grid */}
					<div className="col-span-1 relative flex justify-center items-center">
						<div className="p-5 bg-timberwolf w-80 h-96 relative">
							{photo && photo.length > 0 && (
								<img
									src={photo[currentIndex]}
									alt="Speaker's Photo"
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
								/>
							)}
						</div>
					</div>

					{/* Profession and Description Grid */}
					<div className="col-span-1 pt-4 mb-1 text-center">
						<h1 className="font-black text-2xl text-center">
							{speakerProfession[currentIndex]}
						</h1>
						<h2 className="font-black text-2xl text-center font-sans">
							{intOrExt[currentIndex]}
						</h2>
						<p className="font-medium text-2x1 text-justify">
							{description[currentIndex]}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpeakerPanelistLayout;
