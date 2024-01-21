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
			return new NextResponse(e?.toString(), {
				status: 422,
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
	};
};

export default serverWrapper;
