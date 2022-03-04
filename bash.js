process.stdout.write("prompt>");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(`${process.cwd()}\n`);
  } else {
    process.stdout.write(`You typed ${cmd}\n`);
  }
  process.stdout.write("prompt>");
});
