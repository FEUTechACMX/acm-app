import HomeWide from "@/components/2023/_gen/wide/HomeWide";
const Featured = () => {
	return (
		<HomeWide>
			<h1>Featured</h1>
			<iframe
				width={"100%"}
				src="https://www.youtube-nocookie.com/embed/_WtdF7yQHd8?si=1xgnIyOA3bRN5lPF?rel=0;&autoplay=1"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				className="aspect-video"
				allowFullScreen
			></iframe>
			<div className="text-center flex gap-5 flex-col text-balance">
				<h2>FEU Tech ACM 23-24</h2>
				<p>The chaotic reign for this 👾 dystopian year 👾 will take off 🔥!</p>
				<p>
					FEU Tech ACM stands toe to toe in the digital realm 💻, and we have
					many events in store for all of you 🛠️!
				</p>
				<p>
					As a small teaser of what we will bring to the table, we present our
					AVP for the school year 2023-2024 ⚡⚡!
				</p>
				<p>Get ready ACMBlers, this is only the beginning</p>
			</div>
		</HomeWide>
	);
};

export default Featured;
