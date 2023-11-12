"use client";
import Header from "@/components/2023/(website)/(main)/home/header";
import Prompt from "@/components/2023/(website)/(main)/home/prompt";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Home: NextPage = () => {
	const { data: session } = useSession();
	const router = useRouter();
	if (session) router.push("/2023/dashboard");
	return (
		<main>
			<Prompt />
			<Header />
		</main>
	);
};

export default Home;
