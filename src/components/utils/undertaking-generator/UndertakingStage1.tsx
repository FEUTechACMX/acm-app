import { UndertakingBody } from "@/app/api/utils/undertaking-generator/route";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Control, UseFormRegister, UseFormSetValue } from "react-hook-form";
export interface UndertakingGeneratorProps {
	props: {
		register: UseFormRegister<UndertakingBody>;
		control: Control<UndertakingBody, any>;
		setValue: UseFormSetValue<UndertakingBody>;
	};
}

const yearArr = ["1st", "2nd", "3rd", "4th"] as const;

const UndertakingStage1: React.FC<UndertakingGeneratorProps> = () => {
	return (
		<>
			<div className="w-full flex flex-col gap-1">
				<Input
					type="text"
					variant={"underlined"}
					label="Full Name"
					placeholder="ex. Victor Magtanggol"
					radius="sm"
					isClearable
					isRequired
					size="lg"
					className="text-lg"
				/>
				<Input
					type="text"
					variant={"underlined"}
					size="lg"
					label="Student Number"
					placeholder="ex. 20yyxxxxx"
					// labelPlacement="outside"
					radius="sm"
					isClearable
					isRequired
				/>
				<div className="flex w-full gap-2">
					<Select
						placeholder="Select Year"
						variant="underlined"
						radius="sm"
						isRequired
						className="text-lg"
					>
						{yearArr.map((year) => {
							return (
								<SelectItem key={year} value={year}>
									{year}
								</SelectItem>
							);
						})}
					</Select>
					<Select
						placeholder="Select Program"
						variant="underlined"
						radius="sm"
						isRequired
						className="text-lg"
					>
						<SelectItem key={1} value="BSCSSE">
							BSCSSE
						</SelectItem>
						<SelectItem key={2} value="BSCSDS">
							BSCSDS
						</SelectItem>
					</Select>
				</div>

				<Select
					placeholder="Select Enrollment Format"
					variant="underlined"
					radius="sm"
					isRequired
					className="text-lg"
				>
					<SelectItem key={1} value={"FEU Tech"}>
						FEU Tech - &lt;Course Code&gt;
					</SelectItem>
					<SelectItem key={2} value={"FEU Institute of Techology"}>
						FEU Institute of Technology - &lt;Course Code&gt;
					</SelectItem>
				</Select>

				<Input
					type="file"
					variant={"underlined"}
					radius="sm"
					isClearable
					isRequired
				/>

				<Input
					type="file"
					variant={"underlined"}
					radius="sm"
					isClearable
					isRequired
				/>
				{/* <input
					type="text"
					{...register("fullName", {
						required: true,
						minLength: 5,
						maxLength: 50,
					})}
					placeholder="ex. Victor Magtanggol"
					className="px-1 py-2 sm:px-4 sm:py-2 w-full border-2 border-accents rounded-md"
				/> */}
			</div>
			<div className="w-full">
				{/* <label htmlFor="studentNumber">Student Number:</label>
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
				/> */}
			</div>
			{/* <div className="w-full">
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
			</div> */}
			{/* <div className="w-full">
				<label htmlFor="enrollmentFormat">Enrollment Format:</label>
				<div className="flex w-full gap-2">
					<select
						{...register("enrollmentFormat", {
							required: true,
						})}
						className=" p-1 border-2 border-accents rounded-md flex-1"
					>
						{universityNameArr.map((uni) => {
							const key = uni[0];
							return (
								<option value={key} key={key}>
									{uni[1]} - &lt;Course Code&gt;
								</option>
							);
						})}
						;
					</select>
				</div>
			</div> */}
			{/* <div className="w-full">
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
			</div> */}
		</>
	);
};

export default UndertakingStage1;
