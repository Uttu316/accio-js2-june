const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let s = new Set();
function perm(str, ans = "") {
  if (str.length === 0) {
    if (s.has(ans)) {
      return;
    }
    console.log(ans);
    s.add(ans);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];

    let rest = str.slice(0, i) + str.slice(i + 1);

    // console.log(curr,`(${rest})`)
    perm(rest, ans + curr);
  }
}

rl.on("line", (input) => {
  perm(input);
  rl.close();
});
