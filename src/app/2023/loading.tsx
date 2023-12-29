import { Spinner } from "@nextui-org/react";
const Loading: React.FC = () => {
	return (
		<section className=" w-screen h-screen flex justify-center items-center fixed">
			<Spinner />
		</section>
	);
};

export default Loading;
