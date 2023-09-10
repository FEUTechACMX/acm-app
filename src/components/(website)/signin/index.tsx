"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const AuthForm: React.FC = () => {
	const [email, setEmail] = useState("");
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
					placeholder="email@fit.edu.ph"
					required
					minLength={21}
					maxLength={21}
					autoComplete="off"
					spellCheck="false"
					className="p-2 m-auto w-80"
				/>
				<button className="p-2 w-6/12 m-auto">Sign in with Email</button>
				<button className="p-2 w-6/12 m-auto" onClick={() => signIn("google")}>
					Google
				</button>
			</form>
		</span>
	);
};

export default AuthForm;
