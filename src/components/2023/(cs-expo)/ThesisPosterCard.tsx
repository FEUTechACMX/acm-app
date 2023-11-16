/* The useState is for managing the image index, which is an array of integers.
The useEffect is for setting up a timer to change the image index at a 5-second interval. */
import { useEffect, useState } from "react";
import Image from "next/image";

/* The `categories` constant is an array of objects that represents different categories. 
Each category object has the following properties: name, images from public/ directory,
and description.
*/
const categories = [
	{
		name: "Category 1",
		images: [
			"data-analytics/engeenz.png",
			"data-analytics/returntosleep.png",
			"data-analytics/softyware.png",
		],
		description: "Data Analytics",
	},
	{
		name: "Category 2",
		images: [
			"education/javangers.png",
			"education/peakyblinders.png",
			"education/quinta.jpg",
			"education/roblux.png",
			"education/yaymiko.png",
		],
		description: "Education",
	},
	{
		name: "Category 3",
		images: ["health/aim.png", "health/helloworld.png", "health/softies.png"],
		description: "Health",
	},
	{
		name: "Category 4",
		images: [
			"imgproc-cv/arrayco.png",
			"imgproc-cv/midnightcoders.png",
			"imgproc-cv/teasis.png",
		],
		description: "Image Processing / Computer Vision",
	},
	{
		name: "Category 5",
		images: ["iot/adorables.png", "iot/codebebs.png", "iot/innov8.jpg"],
		description: "Internet of Things",
	},
	{
		name: "Category 6",
		images: ["nlp/stark.png", "nlp/deos.png", "nlp/techniq.png"],
		description: "Natural Language Processing",
	},
];

const ThesisPoster = () => {
	/* This line is initializing a state variable called `imageIndex` using the `useState` hook for
  managing the image index. The `imageIndex` variable is an array of integers. The `setImageIndex`
  variable is a function that is used to update the `imageIndex` variable.
  */
	const [imageIndex, setImageIndex] = useState(
		new Array(categories.length).fill(0),
	);

	// Define a style object for the label text.
	const labelStyle = {
		fontWeight: "bold",
		color: "#1B1C20",
	};

	// Use useEffect to set up a timer to change the image index at a 5-second interval.
	useEffect(() => {
		const timer = setInterval(() => {
			setImageIndex((prevIndex) => {
				// Increment the image index, but loop back to 0 when it reaches the end of the images.
				return prevIndex.map(
					(index, categoryIndex) =>
						(index + 1) % categories[categoryIndex].images.length,
				);
			});
		}, 5000); // 5 seconds

		return () => clearInterval(timer);
	}, []);

	return (
		<main>
			<div className="w-[1400px] relative overflow-x-auto">
				<div className="my-carousel flex">
					{categories.map((category, categoryIndex) => (
						<div key={categoryIndex} className="stack">
							{/* daisyUI's stack images component */}
							{/* <img> needs to be optimized for production */}
							<Image
								src={category.images[imageIndex[categoryIndex]]}
								alt={`Image ${imageIndex[categoryIndex] + 1}`}
								className="rounded w-[350px] h-[350px] object-cover mx-120 my-10"
								style={{ animation: "fadeIn 2s" }}
								loading="lazy" // Lazy loading for images
							/>
							<p className="text-center text-lg mt-2" style={labelStyle}>
								{category.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}; // end of ThesisPoster

export default ThesisPoster;
