"use client";
import { UndertakingData } from "@/app/utils/undertaking/page";
import ACMImage from "@/components/2023/(website)/(main)/_gen/image/acm";
import { Button, Checkbox } from "@nextui-org/react";
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
			className="flex flex-col w-full justify-center items-center gap-2 p-4"
		>
			<div className="w-32 h-12 relative">
				<ACMImage />
			</div>
			<h1 className="text-center">Undertaking Generator</h1>
			<hr className="w-full" />
			<div className="max-h-[500px] overflow-y-auto border-b-2 border-accents w-full">
				{data.map((course) => {
					return (
						<Checkbox className="flex max-w-full w-full" key={course.id}>
							<p className="flex justify-between">
								<span className="w-16">{course.code}</span>
								<span className="truncate">{course.name}</span>
							</p>
						</Checkbox>
					);
				})}
			</div>
			<div className="flex justify-between w-full">
				<Button radius="sm" variant="ghost" color="primary">
					Back
				</Button>
				<Button radius="sm" variant="ghost" color="primary">
					Next
				</Button>
			</div>

			{/* <div className="flex max-w-2xl"> */}
			{/* <div className="w-full p-4 flex gap-1 flex-col"> */}
			{/* <div className="w-32 h-12 relative m-auto">
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
					</div> */}
			{/* </div> */}
		</form>
	);
};

export default UndertakingForm;
