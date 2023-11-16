import Image from "next/image";
import { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Glide from "@glidejs/glide";
/* The `interface Slide` defines the structure of an object that represents a slide in the
ProjectsCarousel component. It has three properties: `title`, `imageLink`, and `backgroundColor`,
all of which are of type string. These properties define the content and styling of each slide in
the carousel. */
interface Slide {
	title: string;
	imageLink: string;
	backgroundColor: string;
}

/* The `interface ProjectsCarouselProps` defines the structure of the props that can be passed to the
`ProjectsCarousel` component. It has one property called `slides`, which is an array of objects of
type `Slide`. This allows the parent component to pass an array of slides to the `ProjectsCarousel`
component, specifying the content and styling for each slide in the carousel. */

// Configuration options for the Glide.js carousel.
const config = {
	type: "carousel",
	autoplay: 4000,
	hoverpause: true,
	startAt: 0,
	perView: 7, // number of slides to show at once in desktop, 7 is an allowance for smooth transition
	gap: 0,
	breakpoints: {
		1200: {
			perView: 6, // number of slides to show at once for large screens
		},
		1024: {
			perView: 5, // number of slides to show at once for medium screens
		},
		768: {
			perView: 7, // number of slides to show at once for small screens
		},
		360: {
			perView: 4,
		},
	},
} as const;

interface ProjectsCarouselProps {
	slides: Slide[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = () => {
	useEffect(() => {
		new Glide(".glide", config).mount(); // Glide is called from `layout.tsx` as a CDN, so don't worry about "Cannot find name 'Glide'"
	}, []);

	return (
		<main className="flex justify-center">
			<div className="w-[2500px] overflow-x-hidden flex justify-center">
				{/* Structure of Glide.js*/}
				<div className="glide w-full flex justify-center items-center mt-[-80px]">
					{" "}
					{/* `mt` is for top margin of Glide before the PROJECTS header */}
					<div className="glide__track w-full" data-glide-el="track">
						<ul className="glide__slides h-[500px]">
							{/* Data Analytics*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#7E7E7E", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#5C5C5C", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "#353535", // foreBackgroundColor
									}}
								>
									<Image
										src="/data-analytics/chart-pie-solid.svg" // path to image
										className="justify-center"
										width={120} //
										height={120}
										alt="Data Analytics"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Data Analytics
									</h1>
								</div>
							</li>{" "}
							{/* End of Data Analytics */}
							{/* Education*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative mx-0">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#973235", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#B43E41", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "var(--coral-pink)", // foreBackgroundColor
									}}
								>
									<Image
										src="/education/book-open-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Education"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Education
									</h1>
								</div>
							</li>{" "}
							{/* End of Education */}
							{/* Health*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#7E7E7E", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#5C5C5C", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "#353535", // foreBackgroundColor
									}}
								>
									<Image
										src="/health/heart-pulse-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Health"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Health
									</h1>
								</div>
							</li>{" "}
							{/* End of Health */}
							{/* Image Processing / Computer Vision*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#973235", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#B43E41", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "var(--coral-pink)", // foreBackgroundColor
									}}
								>
									<Image
										src="/imgproc-cv/eye-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Image Processing / Computer Vision"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Image Processing / Computer Vision
									</h1>
								</div>
							</li>{" "}
							{/* End of Image Processing / Computer Vision*/}
							{/* Internet of Things*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#7E7E7E", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#5C5C5C", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "#353535", // foreBackgroundColor
									}}
								>
									<Image
										src="/iot/microchip-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Internet of Things"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Internet of Things
									</h1>
								</div>
							</li>{" "}
							{/* End of Internet of Things*/}
							{/* Natural Language Processing*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#973235", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#B43E41", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "var(--coral-pink)", // foreBackgroundColor
									}}
								>
									<Image
										src="/nlp/comments-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Natural Language Processing"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Natural Language Processing
									</h1>
								</div>
							</li>{" "}
							{/* End of Natural Language Processing */}
							{/* ANOTHER LIST <li> to smoothen the transition between the last (NLP) and first (Data Analytics) slides */}
							{/* Data Analytics*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#7E7E7E", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#5C5C5C", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "#353535", // foreBackgroundColor
									}}
								>
									<Image
										src="/data-analytics/chart-pie-solid.svg" // path to image
										className="justify-center"
										width={120} //
										height={120}
										alt="Data Analytics"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Data Analytics
									</h1>
								</div>
							</li>{" "}
							{/* End of Data Analytics */}
							{/* Education*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative mx-0">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#973235", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#B43E41", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "var(--coral-pink)", // foreBackgroundColor
									}}
								>
									<Image
										src="/education/book-open-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Education"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Education
									</h1>
								</div>
							</li>{" "}
							{/* End of Education */}
							{/* Health*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#7E7E7E", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#5C5C5C", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "#353535", // foreBackgroundColor
									}}
								>
									<Image
										src="/health/heart-pulse-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Health"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Health
									</h1>
								</div>
							</li>{" "}
							{/* End of Health */}
							{/* Image Processing / Computer Vision*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#973235", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#B43E41", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "var(--coral-pink)", // foreBackgroundColor
									}}
								>
									<Image
										src="/imgproc-cv/eye-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Image Processing / Computer Vision"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Image Processing / Computer Vision
									</h1>
								</div>
							</li>{" "}
							{/* End of Image Processing / Computer Vision*/}
							{/* Internet of Things*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#7E7E7E", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#5C5C5C", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "#353535", // foreBackgroundColor
									}}
								>
									<Image
										src="/iot/microchip-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Internet of Things"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Internet of Things
									</h1>
								</div>
							</li>{" "}
							{/* End of Internet of Things*/}
							{/* Natural Language Processing*/}
							<li className="glide__slide w-[200px] h-[400px] flex justify-center items-start relative">
								<div
									className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
									style={{
										backgroundColor: "#973235", // backBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] left-6 bottom-8 bg-slate-300 absolute"
									style={{
										backgroundColor: "#B43E41", // midBackgroundColor
									}}
								></div>
								<div
									className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
									style={{
										backgroundColor: "var(--coral-pink)", // foreBackgroundColor
									}}
								>
									<Image
										src="/nlp/comments-solid.svg"
										className="justify-center"
										width={120}
										height={120}
										alt="Natural Language Processing"
										style={{
											filter: "invert(1)",
										}}
									/>

									<h1 className="font-medium uppercase text-white text-center w-60 mt-5">
										Natural Language Processing
									</h1>
								</div>
							</li>{" "}
							{/* End of Natural Language Processing */}
						</ul>{" "}
						{/* End of glide__slides */}
					</div>{" "}
					{/* End of glide__track w-full */}
					{/* Arrow buttons for Glide.js */}
					<div
						className="glide__arrows w-screen absolute sm:block hidden" // sm:block hidden is for hiding the arrows on small screens
						data-glide-el="controls"
					>
						<button
							className="glide__arrow glide__arrow--left left-0 text-5xl transition-opacity duration-300 hover:opacity-50"
							data-glide-dir="<"
							style={{ color: "var(--coral-pink)", backgroundColor: "white" }} // color of left arrow
						>
							<span className="flex-auto">
								<AiOutlineLeft />
							</span>
						</button>
						<button
							className="glide__arrow glide__arrow--right right-0 text-5xl transition-opacity duration-300 hover:opacity-50"
							data-glide-dir=">"
							style={{ color: "var(--coral-pink)", backgroundColor: "white" }} // color of right arrow
						>
							<span className="flex-auto">
								<AiOutlineRight />
							</span>
						</button>
					</div>
				</div>{" "}
				{/* End of glide__arrows */}
			</div>{" "}
			{/* End of glide */}
		</main>
	);
};
export default ProjectsCarousel;
