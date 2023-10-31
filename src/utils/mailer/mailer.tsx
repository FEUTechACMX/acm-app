import { createTransport } from "nodemailer";
interface MailerOptions {
	recipient: string;
	subject: string;
	html?: string;
}

export const mailerOptions = {
	host: process.env.EMAIL_SERVER_HOST,
	port: +process.env.EMAIL_SERVER_PORT,
	service: "gmail",
	auth: {
		user: process.env.EMAIL_SERVER_USER,
		pass: process.env.EMAIL_SERVER_PASSWORD,
	},
};

export const serverDetails = {
	...mailerOptions,
	pool: true,
	tls: {
		rejectUnauthorized: false,
	},
	// DO NOT SET TO TRUE
	// https://nodemailer.com/smtp/ on secure: false,
	// secure: false,

	from: `ACM-X Team <${process.env.EMAIL_SERVER_USER}>`,
	opportunisticTLS: true,
	priority: "high",
	connectionTimeout: 10 * 60 * 1000, // 10 minutes
	greetingTimeout: 5 * 60 * 1000, // 5 minutes
} as const;

export default async function Mailer({
	recipient,
	subject,
	html,
}: MailerOptions) {
	try {
		console.log("Sending email to", recipient);
		const transporter = createTransport(serverDetails);
		const info = await transporter.sendMail({
			to: recipient,
			subject,
			html,
		});
		console.log("Message sent: %s", info.response);
		if (info.rejected.length > 0) throw new Error("Email not sent");
	} catch (error) {
		console.error(error);
	}
}
