"use client";
import { UndertakingData } from "@/app/utils/undertaking/page";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
	fullName: string;
	studentNumber: string;
	year: string;
	program: string;
	signatureImg: File | null;
	idImg: File | null;
};
interface Props {
	props: {
		data: UndertakingData;
	};
}
const UndertakingForm: React.FC<Props> = ({ props: { data } }) => {
	const {
		// register,
		handleSubmit,
		// eslint-disable-next-line no-unused-vars
		watch,
		// eslint-disable-next-line no-unused-vars
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex justify-center items-center h-full relative m-auto"
		>
			<div className="sm:p-6 rounded-lg sm:shadow-md sm:shadow-accents">
				{/* <div className="w-full p-4 flex gap-1 flex-col">
					<div className="w-32 h-12 relative m-auto">
						<ACMImage />
					</div>
					<h1>Undertaking Generator</h1>
					<hr className="w-full" />
					<div>
						<label htmlFor="fullName">Full Name:</label>
						<input
							type="text"
							name="fullName"
							{...(register("fullName"),
							{
								required: true,
								minLength: 5,
								maxLength: 50,
								placeholder: "Ricardo D. Dalisay",
							})}
							className="px-1 py-2 valid:bg-accents sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
						/>
					</div>
					<div>
						<label htmlFor="Year/Program">Year/Program:</label>
						<div className="flex w-full gap-2">
							<select
								{...(register("year"), { required: true })}
								className=" p-1 border-2 border-accents rounded-md flex-1"
							>
								<option value="1st">1st</option>
								<option value="2nd">2nd</option>
								<option value="3rd">3rd</option>
								<option value="4th">4th</option>
							</select>
							<select
								{...(register("program"), { required: true })}
								className=" p-1 border-2 border-accents rounded-md flex-1"
							>
								<option value="BSCSSE">BSCSSE</option>
								<option value="BSCSDS">BSCSDS</option>
							</select>
						</div>
					</div>
					<div>
						<label htmlFor="signatureImg">Signature Image:</label>
						<input
							type="file"
							name="signatureImg"
							accept="image, .png, .jpg, .jpeg"
							{...(register("signatureImg"), { required: true })}
							className="block border-2 border-accents w-full rounded-md"
						/>
					</div>

					<div>
						<label htmlFor="idImg">ID Image:</label>
						<input
							type="file"
							name="idImg"
							accept="image, .png, .jpg, .jpeg"
							{...(register("idImg"), { required: true })}
							className="block  border-2 border-accents w-full rounded-md"
						/>
					</div>
				</div> */}

				<div className="w-full p-4 flex gap-1 flex-col">
					<h2>Course Select</h2>
					<hr className="w-full" />
					<input
						type="search"
						placeholder="Search for course name"
						className="px-1 py-2 sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
					/>
					<div className="flex flex-col gap-1 max-h-96 overflow-y-scroll">
						{data.map((course, index) => (
							<div className="flex gap-2" key={course.id}>
								<input
									type="checkbox"
									name={"course" + index}
									id={course.code}
									className="p-1 border-2 border-accents rounded-md"
								/>
								<label htmlFor={course.code} className="flex">
									<span className="w-32">{course.code}</span>
									<span>{course.name}</span>
								</label>
							</div>
						))}
					</div>
				</div>
			</div>
		</form>
	);
};

export default UndertakingForm;
