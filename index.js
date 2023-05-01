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

module.exports.getJobs = () => jobs;

function addJob(title, company, ...technologies) {
  if (jobs) {
    const job = { title, company, technologies };
    jobs.push(job);
  }
}

async function getPropertyValue(element, propertyName) {
  const property = await element.getProperty(propertyName);
  return await property.jsonValue();
}
