import Nav from "@/components/2023/(website)/(main)/layout/nav";
import Side from "@/components/2023/(website)/(main)/layout/side";
import localFont from "next/font/local";
import "public/2023/media/icons/fontello-84cd01f8/css/fontello.css";
import "../../style.css";
const f_f1s = localFont({
	src: [
		{
			path: "../../../../../public/2023/fonts/f1-secuencia-quad-ffp/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-f1s",
});
const f_hae = localFont({
	src: [
		{
			path: "../../../../../public/2023/fonts/human-alter-ego/font.ttf",
			style: "normal",
		},
	],
	variable: "--font-hae",
});

const f_ot = localFont({
	src: [
		{
			path: "../../../../../public/2023/fonts/over-there/font.ttf",
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
			<Nav />
			<Side />
			{children}
		</body>
	);
};

export default Layout;
