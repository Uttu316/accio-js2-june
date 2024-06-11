const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;

rl.on("line", (line) => {
  if (!t) {
    t = parseInt(line);
    return;
  }
  console.log(camelCase(line));
  t--;
  if (t === 0) {
    rl.close();
  }
});

function camelCase(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "_") {
      ans += str[i + 1].toUpperCase();
      i++;
    } else {
      ans += str[i];
    }
  }

  return ans;
}
