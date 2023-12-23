import ACMImage from "@/components/2023/(website)/(main)/_gen/image/ACMImage";
import { NextPage } from "next";
const VerifyRequest: NextPage = () => {
	return (
		<section>
			<div className="h-screen w-screen">
				<div className="flex justify-center items-center h-full relative max-w-3xl m-auto">
					<div className="sm:p-6 rounded-lg flex p-1 w-full sm:w-9/12 gap-4 flex-col justify-center items-center sm:shadow-md sm:shadow-accents">
						<div className="h-12 w-64 relative">
							<ACMImage />
						</div>
						<h1>Check your email</h1>
						<p>A sign in link has been sent to your email address.</p>
						<p>
							Note: Check your spam folder if you haven&apos;t receive it yet
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VerifyRequest;
