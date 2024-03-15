import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Link,
} from "@nextui-org/react";
import { HiDotsHorizontal } from "react-icons/hi";

const DasboardCard = () => {
	return (
		<Card className="w-full" radius="none">
			<CardHeader className="flex justify-between">
				<span className="flex gap-3">
					<Image
						alt="acm logo"
						height={40}
						radius="sm"
						src="/android-chrome-192x192.png"
						width={40}
					/>
					<div className="flex flex-col">
						<p className="text-md text-panelColor font-bold">FEU Tech ACM</p>
						<p className="text-small font-bold">2024/01/12</p>
					</div>
				</span>
				<span className="text-3xl text-assets">
					<HiDotsHorizontal />
				</span>
			</CardHeader>
			<CardBody>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
					debitis consequuntur minus. Dolore debitis ab eius aperiam neque
					doloremque, eum saepe ipsum consectetur, animi voluptates, maxime
					repellendus praesentium? Deleniti, nihil!
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
	);
};

export default DasboardCard;
