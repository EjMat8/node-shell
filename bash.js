const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");

process.stdout.write("prompt>");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  }
  if (cmd === "ls") {
    ls();
  }
  if (cmd.startsWith("cat")) {
    cat(cmd.split(" ")[1]);
  } else {
    process.stdout.write(`You typed ${cmd}c\n`);
  }
  process.stdout.write("prompt>");
});
