"use client";
import { UndertakingBody } from "@/app/api/utils/undertaking-generator/route";
import ACMImage from "@/components/2023/(website)/(main)/_gen/image/acm";
import { env } from "@/server/env";
import regexIdNumber from "@/utils/regex/schoolId";
import { Button, Checkbox } from "@nextui-org/react";
import data from "public/data/courses.json";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const UndertakingForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
		control,
		setValue,
	} = useForm<UndertakingBody>();
	const onSubmit: SubmitHandler<UndertakingBody> = async (data) => {
		const {
			fullName,
			studentNumber,
			year,
			program,
			courses,
			idImg,
			signatureImg,
		} = data;
		const formData = new FormData();
		formData.append("fullName", fullName);
		formData.append("studentNumber", studentNumber);
		formData.append("year", year);
		formData.append("program", program);
		formData.append(
			"courses",
			JSON.stringify(courses.filter((course) => course)),
		);
		const appendFile = (field: string, file: File | FileList) => {
			if (!file) throw new Error(`No file for field ${field}`);
			if (!(file instanceof File) && !(file instanceof FileList)) {
				throw new Error(`Invalid file type for field ${field}`);
			}

			if (file instanceof FileList) {
				for (const f of file) {
					formData.append(field, f);
				}
			} else {
				formData.append(field, file);
			}
		};
		appendFile("idImg", idImg);
		appendFile("signatureImg", signatureImg);
		const res = await fetch(
			`${env.NEXT_PUBLIC_HOST_URL}/api/utils/undertaking-generator`,
			{
				method: "POST",
				body: formData,
			},
		);
		if (res.ok) {
			console.log("Downloading");
			const blob = await res.blob();
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = "CONFIDENTIALITY-UNDERTAKING.zip";
			link.style.display = "none";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
			console.log("Downloaded");
		} else {
			console.log(await res.text());
			console.log(res);
			alert(
				"Error: Images must be < 2MB. If issues persist, change image to upload",
			);
		}
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
			<div className="w-full">
				<label htmlFor="fullName">Full Name:</label>
				<input
					type="text"
					{...register("fullName", {
						required: true,
						minLength: 5,
						maxLength: 50,
					})}
					placeholder="ex. Victor Magtanggol"
					className="px-1 py-2 sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
				/>
			</div>
			<div className="w-full">
				<label htmlFor="studentNumber">Student Number:</label>
				<input
					type="text"
					{...register("studentNumber", {
						required: true,
						minLength: 9,
						maxLength: 9,
						pattern: regexIdNumber,
					})}
					placeholder="ex. 20yyxxxxx"
					className="px-1 py-2 sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
				/>
			</div>
			<div className="w-full">
				<label htmlFor="Year/Program">Year/Program:</label>
				<div className="flex w-full gap-2">
					<select
						{...register("year", {
							required: true,
						})}
						className=" p-1 border-2 border-accents rounded-md flex-1"
					>
						<option value="1st">1st</option>
						<option value="2nd">2nd</option>
						<option value="3rd">3rd</option>
						<option value="4th">4th</option>
					</select>
					<select
						{...register("program", {
							required: true,
						})}
						className=" p-1 border-2 border-accents rounded-md flex-1"
					>
						<option value="BSCSSE">BSCSSE</option>
						<option value="BSCSDS">BSCSDS</option>
					</select>
				</div>
			</div>

			<div className="w-full">
				<label htmlFor="signatureImg">Signature Upload (png/jpg):</label>
				<Controller
					name="signatureImg"
					control={control}
					render={({ field: { ref, name, onBlur, onChange } }) => (
						<input
							type="file"
							ref={ref}
							required
							accept="image/png,image/jpeg,image/jpg"
							className="w-full rounded-md"
							name={name}
							onBlur={onBlur}
							onChange={(e) => {
								onChange(e.target.files?.[0]);
							}}
						/>
					)}
				/>
			</div>

			<div className="w-full">
				<label htmlFor="idImg">ID Upload (png/jpg):</label>
				<Controller
					name="idImg"
					control={control}
					render={({ field: { ref, name, onBlur, onChange } }) => (
						<input
							type="file"
							ref={ref}
							required
							accept="image/png,image/jpeg,image/jpg"
							className="w-full rounded-md"
							name={name}
							onBlur={onBlur}
							onChange={(e) => {
								onChange(e.target.files?.[0]);
							}}
						/>
					)}
				/>
			</div>

			<div className="w-full">
				<label htmlFor="courses">Select Courses:</label>
				<div className="max-h-[500px] overflow-y-auto border-b-2 border-accents w-full">
					{data.map((course, index) => {
						return (
							<Controller
								control={control}
								name={`courses.${index}`}
								key={course.code}
								render={({ field }) => (
									<Checkbox
										className="flex max-w-full w-full"
										onChange={(e) => {
											if (e.target.checked) {
												setValue(`courses.${index}`, course.code);
											} else {
												setValue(`courses.${index}`, "");
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
			</div>
			<div className="w-full">
				<Button
					type="submit"
					color="primary"
					variant="solid"
					size="lg"
					className="w-full"
					disabled={isSubmitting}
				>
					-- Generate and Download --
				</Button>
			</div>
		</form>
	);
};

export default UndertakingForm;
