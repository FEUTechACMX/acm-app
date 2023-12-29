import { Spinner } from "@nextui-org/react";
const Loading: React.FC = () => {
	return (
		<section className="h-svh w-svw flex justify-center items-center fixed z-50">
			<Spinner />
		</section>
	);
};

export default Loading;
