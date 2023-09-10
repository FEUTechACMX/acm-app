"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const AuthForm: React.FC = () => {
	const [email, setEmail] = useState("");
	return (
		<span>
			<form action="/api/auth/signin/email" method="post">
				<input name="csrfToken" type="hidden" />
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
				/>
				<button type="button">Sign in with Email</button>
				<p>or sign in with</p>
				<button onClick={() => signIn("google")}>Google</button>
			</form>
		</span>
	);
};

export default AuthForm;
