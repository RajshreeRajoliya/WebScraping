const puppeteer = require("puppeteer");

let jobs = [];

module.exports.run = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://remoteok.io");

  await loadLatestJobs(page);
  console.log("Latest Jobs: ", jobs);

  await browser.close();
};
