/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXTAUTH_URL || "https://acmx.vercel.app",
	generateRobotsTxt: true,
};
