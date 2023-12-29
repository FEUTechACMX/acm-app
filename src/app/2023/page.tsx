// import HomeHeader from "@/components/2023/home/header";
import fromAppReferer from "@/utils/validators/fromAppReferer";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Loading from "./loading";
const HomeHeader = dynamic(() => import("@/components/2023/home/header"), {
	loading: () => <Loading />,
});
const Home: NextPage = () => {
	const headersList = headers();
	const referer = headersList.get("referer");
	if (fromAppReferer(referer)) return redirect("/app/dashboard");

	return <HomeHeader />;
};

export default Home;
