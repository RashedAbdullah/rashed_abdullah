/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rashedabdullah.vercel.app/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
