import Image from "next/image";
const Loader: React.FC = () => {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<section className="h-screen w-screen">
			<Image
				src="/media/img/logo/FIT_ACM.png"
				alt="FEU Tech Logo"
				layout={"fill"}
				objectFit={"contain"}
				className="m-auto"
			></Image>
		</section>
	);
};

export default Loader;
