import Link from "next/link";
import ChildrenProps from "types/ChildrenProps";
import ACMImage from "../2023/_gen/image/ACMImage";
const CenterComponent: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<section className="min-h-svh h-svh w-svw">
			<div className="flex justify-center items-center h-full relative max-w-4xl m-auto">
				<div className="sm:p-6 rounded-lg flex p-1 text-center w-full sm:w-9/12 gap-2 flex-col justify-center items-center sm:shadow-md sm:shadow-accents">
					<Link href="/2023" className="h-12 w-64 relative">
						<ACMImage />
					</Link>
					{children}
				</div>
			</div>
		</section>
	);
};

export default CenterComponent;
