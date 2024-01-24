"use client";
import { Button, Input } from "@nextui-org/react";
import { getCsrfToken, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegEnvelope } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { SiAuth0 } from "react-icons/si";
import ACMImage from "../_gen/image/ACMImage";
import Loading from "@/app/2023/loading";
interface Props {
	email: string;
	csrfToken: string;
}
const SigninForm: React.FC = () => {
	const searchParams = useSearchParams();
	function getCallbackUrl() {
		return searchParams.get("callbackUrl") || "/app/dashboard";
	}
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<Props>();
	const [csrfToken, setCsrfToken] = useState<string | undefined>(undefined);

	const onSubmit: SubmitHandler<Props> = async (data) => {
		const { email } = data;
		await signIn("email", {
			email: email + "@fit.edu.ph",
			callbackUrl: getCallbackUrl(),
		});
	};

	useEffect(() => {
		const fetchCsrfToken = async () => {
			const token = await getCsrfToken();
			setCsrfToken(token);
		};
		fetchCsrfToken();
	}, []);
	return (
		<span className="w-full p-4 flex flex-col gap-2">
			<form
				action="/api/auth/signin/email"
				method="post"
				className="flex flex-col w-full justify-center items-center gap-2"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="w-32 h-12 relative">
					<ACMImage />
				</div>
				<h1>ACM-X Portal</h1>
				<hr className="w-full" />
				<input
					type="hidden"
					{...register("csrfToken")}
					defaultValue={csrfToken ?? ""}
				/>
				<Input
					type="text"
					inputMode="numeric"
					label={<span className="text-base">Student Email</span>}
					variant="bordered"
					color="primary"
					classNames={{
						inputWrapper: "border-primary",
						input: "text-base text-base",
					}}
					{...register("email", {
						required: true,
						// minLength: 8,
						// maxLength: 8,
					})}
					isRequired
					placeholder="ex. 20yyxxxxx"
					labelPlacement="inside"
					radius="sm"
					endContent={
						<div className="pointer-events-none flex items-center">
							<span className="text-default-400 text-small">@fit.edu.ph</span>
						</div>
					}
				/>
				<Button
					startContent={<FaRegEnvelope />}
					variant="ghost"
					radius="sm"
					className="w-full text-base"
					type="submit"
				>
					Sign in with Email
				</Button>
				<p className="text-base">Or Sign in with</p>
			</form>
			<Button
				startContent={<FcGoogle />}
				variant="ghost"
				radius="sm"
				className="w-full text-base"
				onClick={async (e) => {
					e.preventDefault();
					await signIn("google", {
						callbackUrl: getCallbackUrl(),
					});
				}}
			>
				Sign in with Google
			</Button>
			{isSubmitting && <Loading />}
			<Button
				startContent={<SiAuth0 />}
				variant="ghost"
				radius="sm"
				className="w-full text-base"
				onClick={async (e) => {
					e.preventDefault();
					await signIn("auth0", {
						callbackUrl: getCallbackUrl(),
					});
				}}
			>
				Sign in with Auth0
			</Button>
		</span>
	);
};

export default SigninForm;
