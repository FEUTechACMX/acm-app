"use client";
import About from "@/components/home/about/";
import Committees from "@/components/home/committees";
import Events from "@/components/home/events";
import Featured from "@/components/home/featured";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Merch from "@/components/home/merch";
// import Prompt from "@/components/home/prompt";
import type { NextPage } from "next";
import { Suspense } from "react";
import Loading from "./loading";
const Home: NextPage = () => {
	return (
		<main>
			<Suspense fallback={<Loading />}>
				{/* <Prompt /> */}
				<Header />
				<About />
				<Featured />
				<Events />
				<Merch />
				<Committees />
				<Footer />
			</Suspense>
		</main>
	);
};

export default Home;
