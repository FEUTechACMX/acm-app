import Link from "next/link";
import ChildrenProps from "types/ChildrenProps";
import ACMImage from "../2023/_gen/image/ACMImage";
interface Props extends ChildrenProps {
	isNotFixed?: boolean;
}
const CenterComponent: React.FC<Props> = ({ children, isNotFixed }) => {
	return (
		<section className={`min-h-screen w-full flex justify-center items-center ${isNotFixed ? "" : "fixed"}`}>
			<div className="flex justify-center w-full items-center h-full relative max-w-4xl">
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
