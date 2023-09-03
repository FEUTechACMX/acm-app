import Image from "next/image";
const Header: React.FC = () => {
	return (
		<header id="header">
			<div className="flex justify-center items-center h-screen w-screen">
				<div className="w-9/12 flex gap-4 flex-col">
					<div className="h-32 w-64 relative flex justify-center items-center m-auto [text-wrap:balance]">
						<Image
							src="/media/img/logo/FIT_ACM.png"
							alt="FEU Tech Logo"
							layout={"fill"}
							objectFit={"contain"}
							className="m-auto"
						></Image>
					</div>
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
			</div>{" "}
		</header>
	);
};

export default Header;
