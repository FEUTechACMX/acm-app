"use client";
import HomeHeader from "@/components/2023/home/header";
import HomePrompt from "@/components/2023/home/prompt";
import type { NextPage } from "next";
const Home: NextPage = () => {
	return (
		<main>
			<HomePrompt />
			<HomeHeader />
		</main>
	);
};

export default Home;
