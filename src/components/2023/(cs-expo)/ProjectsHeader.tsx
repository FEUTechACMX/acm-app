interface ProjectsHeaderProps {
	headerText: string;
	subheaderText: string;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
	headerText,
	subheaderText,
}) => {
	return (
		<main>
			<div className="w-full self-center relative">
				<div className="w-full top-0 text-center text-zinc-900 text-5xl font-bold font-['Helvetica Now Text ']">
					{headerText}
				</div>
				<div className="flex sm:w-full md:w-4/12 lg:w-4/12 mx-auto text-center text-zinc-900 sm:text-base md:text-lg lg:text-xl font-normal font-['Helvetica Now Text ']">
					{subheaderText}
				</div>
			</div>
		</main>
	);
};

export default ProjectsHeader;
