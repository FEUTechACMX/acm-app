import { prisma } from "@/utils/prisman";
import { NextPage } from "next";
const getCourses = async () => {
	const data = await prisma.course.findMany({
		include: {
			department: true,
			courseType: true,
			yearLevel: true,
			term: true,
		},
	});
	return data;
};
const UndertakingPage: NextPage = async () => {
	const data = await getCourses();
	return (
		<div>
			<form action="" method="post">
				<fieldset>
					<legend>Choose course to generate undertaking</legend>
					{data.map((course) => {
						return (
							<div key={course.id}>
								{course.department.name}
								<input
									type="checkbox"
									key={course.id}
									name={course.name}
									value={course.code}
									id={course.code}
								/>
								<label htmlFor={course.code}>
									{course.code} {course.name}
								</label>
							</div>
						);
					})}
				</fieldset>
			</form>
		</div>
	);
};

export default UndertakingPage;
