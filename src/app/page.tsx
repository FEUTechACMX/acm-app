"use client";
import type { NextPage } from "next";
import Image from "next/image";
const Home: NextPage = () => {
	return (
		<main>
			<div className="flex justify-center items-center h-screen w-screen">
				<div className="w-6/12 flex gap-4 flex-col">
					<Image
						src="/media/img/logo/FIT_ACM.png"
						alt="FEU Tech Logo"
						width={100}
						height={100}
						className="m-auto"
					></Image>
					<h1 className="font-mono text-center">FEU Institute of technology</h1>
					<p className="font-sans">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
						odio soluta nihil mollitia voluptatibus, sed sapiente ratione
						perferendis, accusantium, sint esse molestiae. Nobis quo quaerat
						expedita ipsam, sed dolores eos.
					</p>
					<p>
						「我は汝、汝は我。己が信じた正義の為に、あまねく冒涜を省みぬ者よ！
						その怒り、我が名と共に解き放て！
						たとえ地獄に繋がれようと全てを己で見定める、強き意志の力を！」
					</p>
				</div>
			</div>
		</main>
	);
};

export default Home;
