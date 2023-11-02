/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.HOST_URL || "https://acmx.vercel.app",
	generateRobotsTxt: true,
};
