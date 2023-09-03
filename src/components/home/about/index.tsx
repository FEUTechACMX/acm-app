const About: React.FC = () => {
	return (
		<section id="about" className="w-screen h-auto p-8 md:p-24">
			<div className="flex justify-center items-center gap-4 flex-col h-full lg:w-9/12 m-auto">
				<h2 className="font-hae text-5xl text-accents">Who Are We?</h2>
				<p>
					<span className="font-bold text-accents">
						FEU Tech ACM Student Chapter
					</span>{" "}
					is a top-performing academic organization founded in 2007 acting as
					the mother organization for FEU Institute of Technology Computer
					Science students.
				</p>
				<p>
					We are an organization operating exclusively for educational and
					scientific purposes in order to promote to increased knowledge and
					greater interest in science, design, development, construction,
					languages, management and applications; and as a means of
					communication between persons having an interest in computing.
				</p>
			</div>
		</section>
	);
};

export default About;
