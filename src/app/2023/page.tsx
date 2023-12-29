import HomeHeader from "@/components/2023/home/header";
import HomePrompt from "@/components/2023/home/prompt";
import fromAppReferer from "@/utils/validators/fromAppReferer";
import type { NextPage } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const Home: NextPage = () => {
	const headersList = headers();
	const referer = headersList.get("referer");
	if (fromAppReferer(referer)) return redirect("/app/dashboard");

	return (
		<main>
			<HomePrompt />
			<HomeHeader />
		</main>
	);
};

export default Home;
