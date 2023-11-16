import React from "react";

interface PhotoComponentProps {
	currentButton: number;
	customText: string;
}

const PhotoComponent: React.FC<PhotoComponentProps> = ({
	currentButton,
	customText,
}) => {
	let imageSource = ""; // Define a variable to hold the image source

	if (currentButton === 1) {
		imageSource = "/path-to-photo1.jpg";
	} else if (currentButton === 2) {
		imageSource = "/path-to-photo2.jpg";
	} else if (currentButton === 3) {
		imageSource = "/path-to-photo3.jpg";
	}

	return (
		<div className="p-24 text-center font-medium bg-timberwolf w-auto h-auto mt-11 mb-2 ml-6 mr-10 sm:p-64 sm:mt-2 sm:mb-4 sm:ml-28 sm:mr-40 relative">
			Sample Photo {currentButton}
			<img src={imageSource} className="object-cover w-full h-full" />
			<div className="absolute bottom-[-2.5rem] right-[-1.5rem] p-4 sm:p-6 font-normal sm:font-medium bg-coral-pink text-white mb-6 h-36 sm:h-64 w-36 sm:w-72 text-left sm:bottom-[-3.8rem] sm:right-[-4rem] text-sm sm:text-base md:text-lg lg:text-xl">
				{customText}
			</div>
		</div>
	);
};

export default PhotoComponent;
