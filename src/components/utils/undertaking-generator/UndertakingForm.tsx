"use client";
import Loading from "@/app/2023/loading";
import { UndertakingBody } from "@/app/api/utils/undertaking-generator/route";
import { env } from "@/server/env";
import { SubmitHandler, useForm } from "react-hook-form";
import UndertakingGenerator from "./UndertakingTabs";
const UndertakingForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { isSubmitting },
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
			enrollmentFormat,
		} = data;
		const formData = new FormData();
		formData.append("fullName", fullName);
		formData.append("studentNumber", studentNumber);
		formData.append("year", year);
		formData.append("program", program);
		formData.append("enrollmentFormat", enrollmentFormat);
		formData.append("courses", JSON.stringify(courses));
		formData.append("idImg", idImg);
		formData.append("signatureImg", signatureImg);
		const res = await fetch(
			`${env.NEXT_PUBLIC_HOST_URL}/api/utils/undertaking-generator`,
			{
				method: "POST",
				body: formData,
			},
		);
		if (!res.ok) {
			alert(await res.text());
			return;
		}
		console.log("Downloading");
		const blob = await res.blob();
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.style.display = "none";
		link.href = url;
		link.download = "CONFIDENTIALITY-UNDERTAKING.zip";
		document.body.appendChild(link);

		link.click();
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
		console.log("Downloaded");
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col w-full justify-center items-center gap-2"
		>
			{isSubmitting && <Loading />}
			<h1 className="text-center">Undertaking Generator</h1>
			<UndertakingGenerator
				props={{
					register,
					control,
					setValue,
					isSubmitting,
				}}
			/>
		</form>
	);
};

export default UndertakingForm;
