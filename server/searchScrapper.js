const axios = require("axios");
const cheerio = require("cheerio");

async function getSourceCode(url) {
  var rawSourceCode = await axios.get(url);
  rawSourceCode = rawSourceCode.data;
  return rawSourceCode;
}

async function scrap(url) {
  const sourceCode = await getSourceCode(url);
  const $ = cheerio.load(sourceCode);

  var listLength = $(".thumbnail").length;
  let listOfDivs = [];

  for (let i = 0; i < listLength; i++) {
    var title = $(".thumbnail")[i].attribs.alt;
    var img = $(".thumbnail")[i].attribs.src;
    var href = $(".albumthumbnail")[i].attribs.href;
    let oneDiv = { title: title, img: img, href: href };
    listOfDivs.push(oneDiv);
  }
  listOfDivs = JSON.stringify(listOfDivs);
  return listOfDivs;
}
module.exports = { scrap, getSourceCode };
