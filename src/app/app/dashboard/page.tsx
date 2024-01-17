"use client";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Link,
} from "@nextui-org/react";
import { HiDotsHorizontal } from "react-icons/hi";

const Dashboard = () => {
	return (
		<section className="w-full flex justify-center">
			<div className="w-11/12 md:w-9/12 lg:w-6/12 flex justify-center items-start px-2 py-5 lg:p-10 shadow-none md:shadow-md md:shadow-accents min-h-screen">
				<Card className="w-full">
					<CardHeader className="flex justify-between">
						<span className="flex gap-3">
							<Image
								alt="acm logo"
								height={40}
								radius="sm"
								src="http://localhost:3000/android-chrome-192x192.png"
								width={40}
							/>
							<div className="flex flex-col">
								<p className="text-md text-panelColor font-bold">
									FEU Tech ACM
								</p>
								<p className="text-small font-bold">
									2024/01/12
								</p>
							</div>
						</span>
						<span className="text-3xl text-assets">
							<HiDotsHorizontal />
						</span>
					</CardHeader>
					<CardBody>
						<p>
							I'm 👁 super shy, 🙊🙊 super 💙💢 shy But 🤔 wait a 👌 minute ⏰⏰
							while 🕗 I 🙂💁 make 💆☝ you 😵💁 mine, 🔟 make 💆 you 😀 mine 😡
							Tteollineun jigeumdo, you're 😎👈 on my 💩👭 mind 💭 all the time
							I 👀 wanna tell 😇🔉 you 👉🤣 but, 🍑 I'm super shy, 🙊🙊 super
							shy 🙊 The mothership is arriving, the 👏 leader 🤴 of 💦💰 New
							🏽🎉 Janes is here, 📍😇 maghanda na kayo yumuko kasi siya ang the
							🚟 one and ✔ only 👏 mother, 👵 she 👩 both ate 😋 and 👏💛 she
							😟 is 👅 an ate. Ang tagahandle ng 💰💰 aming pera, wag ka 🔫 sana
							tumakas kasi mawawalan tayo budget for next events plsplspls, wag
							mo 🅱 rin sana gamitin panghanda sa bday mo heheh. Happy birthday
							🎂 to 💦 our 🌈 treasured Treasurer, JANEEE!!! Sana masarap ang
							mga handa mo lalo na ung shanghai mo, dala ka na rin bukas ahhh!!
							Once again, ❌❌ FEU Tech ACM wishes 😘 you 😂 the 🍆👏 happiest
							🤗 of 💦👮 happy 🎇😁 birthdays!!!!!
						</p>
					</CardBody>
					<CardFooter>
						<Link
							isExternal
							showAnchorIcon
							className="text-default-900"
							href="https://github.com/nextui-org/nextui"
						>
							Visit source code on GitHub.
						</Link>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
};

export default Dashboard;
