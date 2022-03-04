const fsTwo = require("fs");

function cat(file) {
  fsTwo.readFile(`./${file}`, "utf8", function (error, data) {
    console.log(data);
  });
}

module.exports = cat;
const fsTwo = require("fs");

function cat(file) {
  fsTwo.readFile(`./${file}`, "utf8", function (error, data) {
    console.log(data);
  });
}

module.exports = cat;
