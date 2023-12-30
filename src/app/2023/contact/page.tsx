import CenterComponent from "@/components/2023/_gen/center/HomeCenter";
import { displaySocials } from "@/utils/socials/displaySocial";
const Contact2023 = () => {
	return (
		<CenterComponent>
			<h1>Contact Us</h1>
			<div className="flex flex-col gap-2">
				<div className="text-start text-xl">
					<p>
						<span className="text-bold">Address: </span>
						<a
							href="https://maps.app.goo.gl/jMbjHqWF3W8mFZq58"
							target="_blank"
							className="text-panelColor"
						>
							P. Paredes St. Sampaloc, Manila, Philippines, 1015
						</a>
					</p>
					<p>
						Email Address:{" "}
						<a
							href="mailto:acm.feu.it@gmail.com"
							target="_blank"
							className="text-panelColor"
						>
							acm.feu.it@gmail.com
						</a>
					</p>
				</div>
				<hr />
				<p className="font-2xl text-panelColor font-bold">
					Get In Touch With Us
				</p>
				<div className="grid grid-cols-4 place-items-center">
					{displaySocials(50)}
				</div>
			</div>
		</CenterComponent>
	);
};

export default Contact2023;
