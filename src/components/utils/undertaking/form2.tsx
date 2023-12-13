import { UndertakingData } from "@/app/utils/undertaking/page";
interface Props {
	data: UndertakingData;
}

const UndertakingForm2: React.FC<Props> = ({ data }) => {
	return (
		<>
			<h2 className="m-auto">Course Select</h2>
			<input
				type="search"
				placeholder="Search for course name"
				className="px-1 py-2 sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
			/>
			<div className="flex flex-col gap-1 max-h-96 overflow-y-scroll border-accents border-b-2">
				{data.map((course, index) => (
					<div className="flex gap-2 items-center" key={course.id}>
						<input
							type="checkbox"
							name={"course" + index}
							id={course.code}
							className="p-1"
						/>
						<label htmlFor={course.code} className="flex flex-col sm:flex-row">
							<span className="sm:w-32">{course.code}</span>
							<span>{course.name}</span>
						</label>
					</div>
				))}
			</div>
		</>
	);
};

export default UndertakingForm2;
