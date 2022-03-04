const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");
const curl = require("./curl.js");

process.stdout.write("prompt>");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd(done);
  }
  if (cmd === "ls") {
    ls(done);
  }
  if (cmd.startsWith("cat")) {
    cat(done, cmd.split(" ")[1]);
  }
  if (cmd.startsWith("curl")) {
    curl(done, cmd.split(" ")[1]);
  }
  else {
    process.stdout.write(`You typed ${cmd}\n`);
  }
});

function done (output){
  process.stdout.write(output)
  process.stdout.write("prompt>")
}

module.exports = done
