"use client";
import { useRouter } from "next/navigation";
const Error404: React.FC = () => {
	const router = useRouter();
	router.push("/2023/404");
	return <></>;
};

export default Error404;
