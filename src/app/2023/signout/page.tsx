"use client";
import CenterComponent from "@/components/wrapper/CenterComponent";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { signOut } from "next-auth/react";
const Signout: NextPage = () => {
	return (
		<CenterComponent>
			<h1>ACM-X Signout</h1>
			<p>Thank you for supporting project ACM-X</p>
			<Button
				onClick={async () => {
					await signOut({
						redirect: true,
						callbackUrl: "/",
					});
				}}
			>
				Signout
			</Button>
		</CenterComponent>
	);
};

export default Signout;
