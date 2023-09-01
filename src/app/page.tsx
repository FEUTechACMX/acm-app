"use client";
import About from "@/components/home/about";
import Committee from "@/components/home/committee";
import Events from "@/components/home/events";
import Featured from "@/components/home/featured";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Merch from "@/components/home/merch";
import type { NextPage } from "next";
const Home: NextPage = () => {
	return (
		<main>
			<Header />
			<About />
			<Featured />
			<Merch />
			<Committee />
			<Events />
			<Footer />
		</main>
	);
};

export default Home;
