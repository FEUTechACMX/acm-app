"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const AuthForm: React.FC = () => {
	const [email, setEmail] = useState<string>("20yyxxxxx@fit.edu.ph");
	return (
		<span className="w-full">
			<form
				action="/api/auth/signin/email"
				method="post"
				className="flex flex-col w-full justify-center"
			>
				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					name="email"
					type="email"
					placeholder="20yyxxxxx@fit.edu.ph"
					required
					minLength={20}
					maxLength={20}
					autoComplete="off"
					spellCheck="false"
					className="p-2 m-auto w-80"
				/>
				<button className="p-2 w-6/12 m-auto">Sign in with Email</button>
				<button
					className="p-2 w-6/12 m-auto"
					onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
				>
					Sign in with Google
				</button>
			</form>
		</span>
	);
};

export default AuthForm;
