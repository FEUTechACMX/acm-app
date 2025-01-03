import { env } from "@/server/env";

interface Params {
	url: string;
}
export default function emailSignin({ url }: Params) {
	return `
<body style="
		padding: 0;
		margin: 0;
		display: flex;
		background: #0b001a;
		border-top: 3px solid #833fe0;
		height: calc(100vh - 3px);
		line-height: 1.6rem;
		color: white;
	">
	<div style="
			border: 3px solid #833fe0;
			border-radius: 1.2rem;
			margin: auto;
			max-width: 500px;
			padding: 2rem;
			font-family:
				-apple-system,
				BlinkMacSystemFont,
				Segoe UI,
				Roboto,
				Oxygen,
				Ubuntu,
				Cantarell,
				Fira Sans,
				Droid Sans,
				Helvetica Neue,
				sans-serif;
		">
		<img src="${env.HOST_URL}/media/logo/FIT_ACM_min.png" alt="FEU Tech ACM-X Logo" height="48"
			style="display: block; border-radius: 0.4rem; margin: 0.2rem auto" />
		<h1 style="padding: 0; margin: 0; text-align: center; color: #833fe0; font-size:1.4rem;">
			FEU Tech ACM-X Sign In
		</h1>
		<hr style="background: #fff; color: #fff; margin: 1rem auto; width: 70%" />
		<p style="padding: 0; margin: 0.4rem">Welcome Home, ACMbler. Click the button below to signin.</p>

		<a href="${url}" style="
				display: block;
				text-decoration: none;
				border-radius: 0.6rem;
				font-weight: bold;
				box-sizing: content-box;
				padding: 0.4rem;
				text-align: center;
				margin: 0;
				border: 2px solid #833fe0;
				color: #fff;
			">Initiate Chaos!</a>
		<hr style="
				background: #0b001a;
				color: #0b001a;
				margin: 0.4rem auto;
				width: 70%;
			" />
		<p style="padding: 0; margin: 0">
			If you did not sign up for FEU Tech ACM-X, kindly ignore this email.
		</p>
		<p style="padding: 0; margin: 0;">&gt; From the ACM-X team.</p>
		<hr style="background: #fff; color: #fff; margin: 1rem auto; width: 70%" />
		<p style="text-align: center; font-weight: bold;">Explore the digital dystopia below!</p>
		<div style="font-weight: bold; text-align: center;">
			<a href="https://youtube.com/@ACMFIT" alt="ACM-X YouTube" target="_blank" style="padding: 0 0.2rem; color: #833fe0;">
				YouTube
			</a>
			<a href="https://www.linkedin.com/company/feutechacm/" alt="ACM-X LinkedIn" target="_blank"
				style="padding: 0 0.2rem; color: #833fe0;">
				LinkedIn
			</a>
			<a href="https://www.facebook.com/feutechACM" alt="ACM-X Facebook" target="_blank"
				style="padding: 0 0.2rem; color: #833fe0;">
				Facebook
			</a>
		</div>
	</div>
</body>
`;
}
