/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ibadantc.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}
