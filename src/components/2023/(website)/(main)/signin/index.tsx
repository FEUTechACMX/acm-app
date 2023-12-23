import ACMImage from "@/components/2023/(website)/(main)/_gen/image/ACMImage";
import InlineFont from "@/utils/font/InlineFont";
import regexToString from "@/utils/regex/_toString";
import regexSchoolEmail from "@/utils/regex/schoolEmail";
import { getCsrfToken, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEnvelope } from "react-icons/fa6";
const AuthForm: React.FC = () => {
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
		<span className="w-full p-4">
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
					pattern={regexToString(regexSchoolEmail)}
					minLength={20}
					maxLength={20}
					autoComplete="off"
					spellCheck="false"
					className="px-2 py-2 valid:bg-accents sm:px-4 sm:py-4 w-full border-2 border-accents rounded-md"
				/>
				<button
					className="px-2 py-1 sm:px-4 border-2 w-full border-accents rounded-md hover:bg-accents"
					onClick={async () =>
						await signIn("email", {
							email,
							callbackUrl: "/2023/dashboard",
						})
					}
				>
					{/* <EnvelopeIcon className="h-5 w-5" /> */}
					{/* <i className="icon-mail-alt"></i> */}
					{/* <span className="flex justify-center items-center gap-1"> */}
					<InlineFont>
						<FaRegEnvelope />
						Sign in with Email
					</InlineFont>
					{/* </span> */}
				</button>
				<p className=" font-bold">Or Sign in with</p>
			</form>
			<button
				className="px-2 py-1 sm:px-4 border-2 w-full border-accents rounded-md hover:bg-accents"
				onClick={async () =>
					await signIn("google", { callbackUrl: "/2023/dashboard" })
				}
			>
				<InlineFont>
					<FcGoogle />
					Sign in with Google
				</InlineFont>
			</button>
		</span>
	);
};

export default AuthForm;
