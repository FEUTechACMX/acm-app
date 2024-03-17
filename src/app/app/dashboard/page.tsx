"use client";
import DasboardCard from "@/components/app/dashboard/Card";
import DashboardPost from "@/components/app/dashboard/Post";
import DashboardB2T from "@/components/app/dashboard/B2T";
import DashboardFilter from "@/components/app/dashboard/Filter";
const Dashboard = () => {
	return (
		<section className="w-full flex justify-center">
			<div className="w-full md:w-9/12 lg:w-6/12 flex flex-col gap-2 items-start py-5 lg:p-10 shadow-none md:shadow-md md:shadow-accents min-h-screen">
				<DashboardPost />
				<DashboardFilter />
				<DasboardCard />
				<DasboardCard />
				<DasboardCard />
				<DasboardCard />
				<DasboardCard />
				<DasboardCard />

				<DashboardB2T />
			</div>
		</section>
	);
};

export default Dashboard;
