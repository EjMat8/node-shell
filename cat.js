const fsTwo = require("fs");

function cat(done, file) {
  fsTwo.readFile(`./${file}`, "utf8", function (error, data) {
    done(data);
  });
}

module.exports = cat;
