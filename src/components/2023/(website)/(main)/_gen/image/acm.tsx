import Image from "next/image";
const ACMImage: React.FC = () => {
	return (
		<Image
			src="/media/img/logo/FIT_ACM.png"
			alt="FEU Tech ACM Logo"
			layout={"fill"}
			objectFit={"contain"}
			className="m-auto"
		></Image>
	);
};

export default ACMImage;
