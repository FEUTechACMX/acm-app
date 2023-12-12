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
		register,
		handleSubmit,
		// eslint-disable-next-line no-unused-vars
		watch,
		// eslint-disable-next-line no-unused-vars
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<input
					type="text"
					defaultValue="Cardo D. Dalisay"
					{...(register("fullName"),
					{
						required: true,
						minLength: 5,
						maxLength: 50,
					})}
				/>

				<select {...(register("year"), { required: true })}>
					<option value="1st">1st</option>
					<option value="2nd">2nd</option>
					<option value="3rd">3rd</option>
					<option value="4th">4th</option>
				</select>
				<select {...(register("program"), { required: true })}>
					<option value="BSCSSE">BSCSSE</option>
					<option value="BSCSDS">BSCSDS</option>
				</select>

				<input
					type="file"
					accept="image"
					{...(register("signatureImg"), { required: true })}
				/>
				<input
					type="file"
					accept="image"
					{...(register("idImg"), { required: true })}
				/>

				<input type="submit" />
			</div>

			<div>
				{data.map((course) => (
					<div key={course.id}>
						<h1>{course.code}</h1>
						<p>{course.name}</p>
						<p>{course.courseType.type}</p>
					</div>
				))}
			</div>
		</form>
	);
};

export default UndertakingForm;
