"use client";
import InlineFont from "@/utils/font/InlineFont";
import { getCsrfToken, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { SiAuth0 } from "react-icons/si";
import ACMImage from "../_gen/image/ACMImage";

const SigninForm: React.FC = () => {
	const searchParams = useSearchParams();
	function getCallbackUrl() {
		return searchParams.get("callbackUrl") || "/app/dashboard";
	}
	const [email, setEmail] = useState<string>("");
	const [csrfToken, setCsrfToken] = useState<string | undefined>(undefined);

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
			>
				<div className="w-32 h-12 relative">
					<ACMImage />
				</div>
				<h1>ACM-X Portal</h1>
				<hr className="w-full" />
				<input name="csrfToken" type="hidden" defaultValue={csrfToken ?? ""} />
				<input
					onChange={(e) => setEmail(e.currentTarget.value)}
					value={email}
					name="email"
					type="email"
					placeholder="20yyxxxxx@fit.edu.ph"
					required
					autoFocus
					autoSave="on"
					autoCorrect="off"
					spellCheck="false"
					className="px-2 py-2 valid:bg-accents sm:px-4 sm:py-4 w-full border-2 border-accents rounded-md"
				/>
				<button
					className="px-2 py-1 sm:px-4 border-2 w-full border-accents rounded-md hover:bg-accents"
					type="submit"
					onClick={async (e) => {
						e.preventDefault();
						await signIn("email", {
							email,
							callbackUrl: getCallbackUrl(),
						});
					}}
				>
					<InlineFont>
						<FaRegEnvelope />
						Sign in with Email
					</InlineFont>
				</button>
				<p className=" font-bold">Or Sign in with</p>
			</form>
			<button
				className="px-2 py-1 sm:px-4 border-2 w-full border-accents rounded-md hover:bg-accents"
				onClick={async (e) => {
					e.preventDefault();
					await signIn("google", {
						callbackUrl: getCallbackUrl(),
					});
				}}
			>
				<InlineFont>
					<FcGoogle />
					Sign in with Google
				</InlineFont>
			</button>
			<button
				className="px-2 py-1 sm:px-4 border-2 w-full border-accents rounded-md hover:bg-accents"
				onClick={async (e) => {
					e.preventDefault();
					await signIn("auth0", {
						callbackUrl: getCallbackUrl(),
					});
				}}
			>
				<InlineFont>
					<SiAuth0 />
					Sign in with Auth0
				</InlineFont>
			</button>
		</span>
	);
};

export default SigninForm;
