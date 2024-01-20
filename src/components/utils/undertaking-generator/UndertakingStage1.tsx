import { UndertakingBody } from "@/app/api/utils/undertaking-generator/route";
import regexIdNumber from "@/utils/regex/schoolId";
import { Input, Select, SelectItem } from "@nextui-org/react";
import {
	Control,
	Controller,
	UseFormRegister,
	UseFormSetValue,
} from "react-hook-form";
export interface UndertakingGeneratorProps {
	props: {
		register: UseFormRegister<UndertakingBody>;
		control: Control<UndertakingBody, any>;
		setValue: UseFormSetValue<UndertakingBody>;
	};
}

const yearArr = ["1st", "2nd", "3rd", "4th"] as const;

const UndertakingStage1: React.FC<UndertakingGeneratorProps> = ({ props }) => {
	const { register, control } = props;
	return (
		<>
			<div className="w-full flex flex-col gap-1">
				<Input
					type="text"
					variant={"underlined"}
					label="Full Name"
					placeholder="ex. Ricardo D. Dalisay"
					radius="sm"
					isClearable
					{...register("fullName", {
						required: true,
						minLength: 5,
						maxLength: 50,
					})}
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
					{...register("studentNumber", {
						required: true,
						minLength: 9,
						maxLength: 9,
						pattern: regexIdNumber,
					})}
					radius="sm"
					isClearable
					isRequired
				/>
				<div className="flex w-full gap-2">
					<Select
						placeholder="Select Year"
						variant="underlined"
						radius="sm"
						{...register("year", {
							required: true,
						})}
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
						{...register("program", {
							required: true,
						})}
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
					{...register("enrollmentFormat", {
						required: true,
					})}
					isRequired
					className="text-lg"
				>
					<SelectItem key={1} value={1}>
						FEU Tech - &lt;Course Code&gt;
					</SelectItem>
					<SelectItem key={2} value={2}>
						FEU Institute of Technology - &lt;Course Code&gt;
					</SelectItem>
				</Select>

				<Controller
					name="signatureImg"
					control={control}
					render={({ field: { ref, name, onBlur, onChange } }) => (
						<Input
							type="file"
							variant={"underlined"}
							radius="sm"
							ref={ref}
							accept="image/png,image/jpeg,image/jpg"
							isRequired
							name={name}
							onBlur={onBlur}
							onChange={(e) => {
								onChange(e.currentTarget.files?.[0]);
							}}
						/>
					)}
				/>

				<Controller
					name="idImg"
					control={control}
					render={({ field: { ref, name, onBlur, onChange } }) => (
						<Input
							type="file"
							variant={"underlined"}
							radius="sm"
							ref={ref}
							accept="image/png,image/jpeg,image/jpg"
							isRequired
							name={name}
							onBlur={onBlur}
							onChange={(e) => {
								onChange(e.currentTarget.files?.[0]);
							}}
						/>
					)}
				/>
			</div>
		</>
	);
};

export default UndertakingStage1;
