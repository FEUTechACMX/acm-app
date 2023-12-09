/* eslint-disable no-unused-vars */
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
const serverWrapper = (
	fn: (
		req: NextRequest,
		res: NextApiResponse,
	) => NextResponse | Promise<NextResponse>,
) => {
	return async (req: NextRequest, res: NextApiResponse) => {
		try {
			return await fn(req, res);
		} catch (e) {
			console.error(e);
		}
	};
};

export default serverWrapper;
