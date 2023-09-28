"use client";
import Header from "@/components/2023/(website)/(main)/home/header";
import Prompt from "@/components/2023/(website)/(main)/home/prompt";
import type { NextPage } from "next";
import { Suspense } from "react";
import Loading from "./loading";
const Home: NextPage = () => {
	return (
		<main>
			<Suspense fallback={<Loading />}>
				<Prompt />
				<Header />
			</Suspense>
		</main>
	);
};

export default Home;
