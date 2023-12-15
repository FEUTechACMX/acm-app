"use client";
import { UndertakingBody } from "@/app/api/utils/undertaking-generator/route";
import { UndertakingData } from "@/app/utils/undertaking/page";
import ACMImage from "@/components/2023/(website)/(main)/_gen/image/acm";
import { Button, Checkbox } from "@nextui-org/react";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Props {
	props: {
		data: UndertakingData;
	};
}
const UndertakingForm: React.FC<Props> = ({ props: { data } }) => {
	const {
		register,
		handleSubmit,
		// eslint-disable-next-line no-unused-vars
		formState: { errors },
		control,
		setValue,
	} = useForm<UndertakingBody>();
	const onSubmit: SubmitHandler<UndertakingBody> = async (data) => {
		// console.log(data);
		const formData = new FormData();
		formData.append("fullName", data.fullName);
		formData.append("studentNumber", data.studentNumber);
		formData.append("year", data.year);
		formData.append("program", data.program);
		// remove all null values
		data.courses = data.courses.filter((course) => course);
		formData.append("courses", JSON.stringify(data.courses));
		if (data.idImg) {
			console.log(data.idImg);
			if (data.idImg instanceof FileList) {
				// Append each file from the array to the FormData
				for (const file of data.idImg) {
					formData.append("idImg", file);
				}
			} else {
				// Append the single file to the FormData
				formData.append("idImg", data.idImg);
			}
		}
		if (data.signatureImg) {
			if (data.signatureImg instanceof FileList) {
				// Append each file from the array to the FormData
				for (const file of data.signatureImg) {
					formData.append("signatureImg", file);
				}
			} else {
				// Append the single file to the FormData
				formData.append("signatureImg", data.signatureImg);
			}
		}

		// eslint-disable-next-line no-unused-vars
		const res = await fetch(
			"http://localhost:3000/api/utils/undertaking-generator",
			{
				method: "POST",
				body: formData,
			},
		);
		alert("Here");
		// await axios.post("/api/utils/undertaking-generator", formData, {
		// 	headers: {
		// 		"Content-Type": "multipart/form-data",
		// 	},
		// });
	};
	useEffect(() => {
		setValue("courses", []);
	}, [setValue]);

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
						<Controller
							control={control}
							name={`courses.${course.id}`}
							key={course.id}
							render={({ field }) => (
								<Checkbox
									className="flex max-w-full w-full"
									onChange={(e) => {
										if (e.target.checked) {
											setValue(`courses.${course.id}`, course.code);
										} else {
											setValue(`courses.${course.id}`, "");
										}
									}}
									isSelected={field.value === course.code}
									value={course.code}
								>
									<p className="flex justify-between">
										<span className="w-16">{course.code}</span>
										<span className="truncate">{course.name}</span>
									</p>
								</Checkbox>
							)}
						/>
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
			<div className="w-full flex gap-1 flex-col items-center justify-center">
				<div className="w-32 h-12 relative m-auto">
					<ACMImage />
				</div>
				<h1>Undertaking Generator</h1>
				<hr className="w-full" />
				<div className="w-full">
					<label htmlFor="fullName">Full Name:</label>
					<input
						type="text"
						{...register("fullName")}
						className="px-1 py-2 valid:bg-accents sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
					/>
				</div>
				<div className="w-full">
					<label htmlFor="studentNumber">Student Number:</label>
					<input
						type="text"
						{...register("studentNumber")}
						className="px-1 py-2 valid:bg-accents sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
					/>
				</div>
				<div className="w-full">
					<label htmlFor="Year/Program">Year/Program:</label>
					<div className="flex w-full gap-2">
						<select
							{...register("year")}
							className=" p-1 border-2 border-accents rounded-md flex-1"
						>
							<option value="1st">1st</option>
							<option value="2nd">2nd</option>
							<option value="3rd">3rd</option>
							<option value="4th">4th</option>
						</select>
						<select
							{...register("program")}
							className=" p-1 border-2 border-accents rounded-md flex-1"
						>
							<option value="BSCSSE">BSCSSE</option>
							<option value="BSCSDS">BSCSDS</option>
						</select>
					</div>
				</div>

				<Controller
					name="signatureImg"
					control={control}
					render={({ field: { ref, name, onBlur, onChange } }) => (
						<input
							type="file"
							ref={ref}
							name={name}
							onBlur={onBlur}
							onChange={(e) => {
								onChange(e.target.files?.[0]);
							}}
						/>
					)}
				/>
				{/* <input {...register("idImg")} type="file" id="idImg" /> */}
				{/* <div className="w-full">
					<label htmlFor="signatureImg">Signature Image:</label>
					<input
						type="file"
						accept="image, .png, .jpg, .jpeg"
						{...register("signatureImg")}
						className="block border-2 border-accents w-full rounded-md"
					/>
				</div> */}

				<Controller
					name="idImg"
					control={control}
					render={({ field: { ref, name, onBlur, onChange } }) => (
						<input
							type="file"
							ref={ref}
							name={name}
							onBlur={onBlur}
							onChange={(e) => {
								onChange(e.target.files?.[0]);
							}}
						/>
					)}
				/>
				{/* 
				<div className="w-full">
					<label htmlFor="idImg">ID Image:</label>
					<input
						type="file"
						accept="image, .png, .jpg, .jpeg"
						{...register("idImg")}
						className="block  border-2 border-accents w-full rounded-md"
					/>
				</div> */}

				<div>
					{/* <Button type="submit" /> */}
					<button type="submit">Submit</button>
				</div>
			</div>
		</form>
	);
};

export default UndertakingForm;
