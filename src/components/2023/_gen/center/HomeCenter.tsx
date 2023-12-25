import ChildrenProps from "types/ChildrenProps";
import ACMImage from "../image/ACMImage";
const CenterComponent: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<section className="h-screen w-screen fixed top-0 left-0">
			<div className="flex justify-center items-center h-full relative max-w-3xl m-auto">
				<div className="sm:p-6 rounded-lg flex p-1 text-center w-full sm:w-9/12 gap-1 sm:gap-4 flex-col justify-center items-center sm:shadow-md sm:shadow-accents">
					<div className="h-12 w-64 relative">
						<ACMImage />
					</div>
					{children}
				</div>
			</div>
		</section>
	);
};

export default CenterComponent;
