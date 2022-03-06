const cheerio = require("cheerio");
const getUrl = require("./searchScrapper");

async function scrapClick(url) {
  const sourceCode = await getUrl.getSourceCode(url);
  const $ = cheerio.load(sourceCode);

  var listLength = $(".wpinkw").length;
  let listOfImageSources = [];

  for (let i = 0; i < listLength; i++) {
    var imgsrc =
      "https://wallpapercave.com" + $(".wpinkw")[i].attribs.href + ".jpg";
    listOfImageSources.push(imgsrc);
  }
  listOfImageSources = JSON.stringify(listOfImageSources);
  return listOfImageSources;
}
module.exports = { scrapClick };
