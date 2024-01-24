import fromAppReferer from "@/utils/validators/fromAppReferer";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const HomeHeader = dynamic(() => import("@/components/2023/home/header"));
const Home: NextPage = () => {
	const headersList = headers();
	const referer = headersList.get("referer");
	if (fromAppReferer(referer)) return redirect("/app/dashboard");

	return <HomeHeader />;
};

export default Home;
