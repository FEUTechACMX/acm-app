import ProjectsHeader from "@expo23-components/ProjectsHeader";
import Carousel from "@expo23-components/HallOfFameCarousel";

const HallOfFame = () => {
	return (
		<main className="pt-24 sm:flex sm:flex-col sm:items-center">
			<ProjectsHeader
				headerText="HALL OF FAME"
				subheaderText="
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nesciunt voluptatum in, minus quis eos placeat dolorum repellendus rem sint, ex excepturi accusamus."
			/>

			{/* Overall Best Thesis */}
			<Carousel
				title="OVERALL BEST THESIS" // Title of the carousel
				// Don't forget to change the type of the slides in the Carousel component when changing it to photos or videos
				// Slide details: ranking(1st Place, etc.), group name, thesis title, link of the group's page
				slides={[
					{
						backgroundColor: "var(--timberwolf)",
						ranking: "1st Place",
						group: "Lorem",
						thesis: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
						link: "/",
					},
					{
						backgroundColor: "var(--timberwolf)",
						ranking: "2nd Place",
						group: "Lorem",
						thesis: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
						link: "/",
					},
					{
						backgroundColor: "var(--timberwolf)",
						ranking: "3rd Place",
						group: "Lorem",
						thesis: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
						link: "/",
					},
				]}
				id="carousel-overall-best-thesis" // ID of the carousel
				carouselNumber={1} // Page number of the carousel
				carouselUp="hidden" // Hide/Show the up arrow (options: "hidden", "")
				carouselDown="" // Hide/Show the down arrow (options: "hidden", "")
				carouselUpTarget="" // ID of the carousel to go to when clicking the up arrow
				carouselDownTarget="carousel-innovative-award" // ID of the carousel to go to when clicking the down arrow
			/>

			{/* Innovative Award */}
			<Carousel
				title="INNOVATIVE AWARD" // Title of the carousel
				// Don't forget to change the type of the slides in the Carousel component when changing it to photos or videos
				// Slide details: ranking(1st Place, etc.), group name, thesis title, link of the group's page
				slides={[
					{
						backgroundColor: "var(--timberwolf)",
						ranking: "1st Place",
						group: "Lorem",
						thesis: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
						link: "/",
					},
					{
						backgroundColor: "var(--timberwolf)",
						ranking: "2nd Place",
						group: "Lorem",
						thesis: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
						link: "/",
					},
					{
						backgroundColor: "var(--timberwolf)",
						ranking: "3rd Place",
						group: "Lorem",
						thesis: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
						link: "/",
					},
				]}
				id="carousel-innovative-award" // ID of the carousel
				carouselNumber={2} // Page number of the carousel
				carouselUp="" // Hide/Show the up arrow (options: "hidden", "")
				carouselDown="" // Hide/Show the down arrow (options: "hidden", "")
				carouselUpTarget="carousel-overall-best-thesis" // ID of the carousel to go to when clicking the up arrow
				carouselDownTarget="" // ID of the carousel to go to when clicking the down arrow
			/>
		</main>
	);
};

export default HallOfFame;
