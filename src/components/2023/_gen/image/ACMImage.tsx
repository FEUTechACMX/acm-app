import Image from "next/image";
const ACMImage: React.FC = () => {
	return (
		<Image
			src="/2023/media/img/logo/FIT_ACM_min.png"
			alt="FEU Tech ACM Logo"
			fill
			style={{
				objectFit: "contain",
			}}
			className="m-auto"
			quality={15}
			priority
		></Image>
	);
};

export default ACMImage;
