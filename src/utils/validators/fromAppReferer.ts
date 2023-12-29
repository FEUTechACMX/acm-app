const appReferrers = new Set(["app.vercel.acmx.twa"]);
function fromAppReferer(referer: string | null) {
	if (!referer) return false;
	const url = new URL(referer);
	return appReferrers.has(url.hostname);
}

export default fromAppReferer;
