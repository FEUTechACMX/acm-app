import { NextRequest, NextResponse } from "next/server";

interface RedirectMap {
	[key: string]: string;
}
const redirectMap: RedirectMap = {
	"/": "/2023",
};

const host = process.env.NEXTAUTH_URL || "http://localhost:3000";
export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const redirect = redirectMap[pathname];
	if (redirect) return NextResponse.redirect(host + redirect);
	return NextResponse.next();
}
