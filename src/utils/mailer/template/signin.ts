interface Params {
	url: string;
}
export default function emailSignin({ url }: Params) {
	return `
<body
	style="
		padding: 0;
		margin: 0;
		display: flex;
		border-top: 3px solid #0b001a;
		height: calc(100vh - 3px);
		line-height: 1.6rem;
		color: white;
	"
>
	<div
		style="
			border: 3px solid #833fe0;
			border-radius: 1.2rem;
			margin: auto;
			max-width: 500px;
			padding: 2rem;
			font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
				Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		"
	>
		<img
			src="${process.env.NEXTAUTH_URL}/android-chrome-512x512.png"
			alt="FEU Tech ACM-X Logo"
			height="64"
			width="64"
			style="display: block; margin: auto; border-radius: 0.4rem"
		/>
		<h2 style="padding: 0; margin: 0; text-align: center">
			FEU Tech ACM-X Sign In
		</h2>
		<hr
			style="background: #0b001a; color: #0b001a; margin: 1rem auto; width: 70%"
		/>
		<p style="padding: 0; margin: 0">
			Thank you for signing up for Markdown Studio. Kindly click the link below
			to start publishing!
		</p>

		<a
			href="${url}"
			style="
				display: block;
				text-decoration: none;
				border-radius: 0.6rem;
				font-weight: bold;
				box-sizing: content-box;
				padding: 0.2rem;
				text-align: center;
				margin: 0;
			"
			>Initiate Chaos!</a
		>
		<hr
			style="background: #0b001a; color: #0b001a; margin: 1rem auto; width: 70%"
		/>
		<p style="padding: 0; margin: 0">
			If you did not sign up for FEU Tech ACM-X, kindly ignore this email.
		</p>
		<p style="padding: 0; margin: 0">From the MD Studio Team.</p>
		<p>Keep in touch with us:</p>
		<div style="font-weight: bold; text-align: center">
			<a
				href="https://acmx.vercel.app/"
				alt="ACM-X Website"
				target="_blank"
				style="padding: 0 0.2rem"
			>
				Website
			</a>
			<a
				href="https://www.linkedin.com/company/feutechacm/"
				alt="ACM-X LinkedIn"
				target="_blank"
				style="padding: 0 0.2rem"
			>
				LinkedIn
			</a>
			<a
				href="https://www.facebook.com/feutechACM"
				alt="ACM-X Facebook"
				target="_blank"
				style="padding: 0 0.2rem"
			>
				Facebook
			</a>
		</div>
	</div>
</body>


`;
}
