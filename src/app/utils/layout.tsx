import localFont from "next/font/local";
import "./style.css";
const f_f1s = localFont({
	src: [
		{
			path: "../../../public/2023/fonts/f1-secuencia-quad-ffp/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-f1s",
});

const f_hae = localFont({
	src: [
		{
			path: "../../../public/2023/fonts/human-alter-ego/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-hae",
});

const f_ot = localFont({
	src: [
		{
			path: "../../../public/2023/fonts/over-there/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-ot",
});
interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<body
			className={`${f_f1s.variable} ${f_hae.variable} ${f_ot.variable} text-base sm:text-lg lg:text-xl`}
		>
			{children}
		</body>
	);
};

export default Layout;
