/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rashedabdullah.com/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
