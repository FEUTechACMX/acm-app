import { Spinner } from "@nextui-org/react";
const Loading: React.FC = () => {
	return (
		<section className="h-svh w-svw flex top-0 left-0 justify-center items-center fixed z-50 backdrop-blur">
			<Spinner />
		</section>
	);
};

export default Loading;
