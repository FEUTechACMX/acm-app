"use client";
import HomeHeader from "@/components/(website)/2023/home/header";
import HomePrompt from "@/components/(website)/2023/home/prompt";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Home: NextPage = () => {
	const { data: session } = useSession();
	const router = useRouter();
	if (session) router.push("/app/dashboard");
	return (
		<main>
			<HomePrompt />
			<HomeHeader />
		</main>
	);
};

export default Home;
