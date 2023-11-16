"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { title } from "process";

const Projects = () => {
	return (
		<main className="flex flex-col items-center justify-between p-24 mt-6">
			{/* Call  ProjectsHeader component */}
			<ProjectsHeader
				headerText="PROJECTS"
				subheaderText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper risus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus."
			/>

			<div className="flex justify-center p-4 w-full">
				<Link
					href="/projects/hall-of-fame"
					className="flex items-center cursor-pointer ml-4 font-medium text-coral-pink whitespace-nowrap"
					// `whitespace-nowrap` prevents Hall of Fame text from wrapping to the next line on smaller screens
				>
					Hall of Fame{" "}
					<span className="flex-auto">
						<AiOutlineRight className="sm:text-base md:text-lg lg:text-xl" />
					</span>
				</Link>
				<Link
					href="/projects/collections-of-projects"
					className="flex items-center cursor-pointer ml-4 font-medium text-coral-pink whitespace-nowrap"
					// `whitespace-nowrap` prevents Collections of Projects text from wrapping to the next line on smaller screens
				>
					Collections of Projects{" "}
					<span>
						<AiOutlineRight className="sm:text-base md:text-lg lg:text-xl" />
					</span>
				</Link>
			</div>

			{/* The `<ProjectsCarousel>` component is rendering a carousel of projects. It takes an
            array of slides as a prop, where each slide represents a project caregory. Each slide has a
            title, an image link, and a background color. The carousel component will display each
            project slide in a carousel format, allowing the user to scroll through the projects
            horizontally. */}
			<ProjectsCarousel
				slides={[
					{
						title: "Data Analytics",
						imageLink: "/data-analytics/chart-pie-solid.svg",
						backgroundColor: "pink",
					},
					{
						title: "Education",
						imageLink: "/education/book-open-solid.svg",
						backgroundColor: "black",
					},
					{
						title: "Health",
						imageLink: "/health/heart-pulse-solid.svg",
						backgroundColor: "pink",
					},
					{
						title: "Image Processing / Computer Vision",
						imageLink: "/imgproc-cv/eye-solid.svg",
						backgroundColor: "black",
					},
					{
						title: "Internet of Things",
						imageLink: "/iot/microchip-solid.svg",
						backgroundColor: "pink",
					},
					{
						title: "Natural Language Processing",
						imageLink: "/nlp/comments-solid.svg",
						backgroundColor: "black",
					},
				]}
			/>
		</main>
	);
};

export default Projects;
