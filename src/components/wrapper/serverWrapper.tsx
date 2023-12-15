/* eslint-disable no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
const serverWrapper = (
	fn: (
		req: NextRequest,
		res: NextResponse,
	) => NextResponse | Promise<NextResponse>,
) => {
	return async (req: NextRequest, res: NextResponse) => {
		try {
			return await fn(req, res);
		} catch (e) {
			console.error(e);
		}
	};
};

export default serverWrapper;
