"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import ACMImage from "@/components/2023/(website)/(main)/_gen/image/acm";

const AuthForm: React.FC = () => {
	const [email, setEmail] = useState<string>("");
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
				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					name="email"
					type="email"
					placeholder="20yyxxxxx@fit.edu.ph"
					required
					pattern="(20)(1|2)(0|1|2|3|4)([0-9]{5})(@fit.edu.ph)"
					minLength={20}
					maxLength={20}
					autoComplete="off"
					spellCheck="false"
					className="px-2 py-2 valid:bg-accents sm:px-4 sm:py-4 w-full border-2 border-accents rounded-md"
				/>
				<button className="px-2 py-1 sm:px-4 border-2 w-full border-accents rounded-md hover:bg-accents">
					<i className="icon-email"></i>
					Sign in with Email
				</button>
				<p className=" font-bold">Or Sign in with</p>
				<button
					className="px-2 py-1 sm:px-4 border-2 w-full border-accents rounded-md hover:bg-accents"
					onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
				>
					<i className="icon-google"></i>
					Sign in with Google
				</button>
			</form>
		</span>
	);
};

export default AuthForm;
