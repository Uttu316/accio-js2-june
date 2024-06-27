const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function count(str, ans = "") {
  if (str === "") {
    console.log(ans);
    return 1;
  }

  const first = parseInt(str[0]);

  if (first === 0) {
    return 0;
  }

  const firstChar = String.fromCharCode(first + 96);

  let rest = str.slice(1);

  // console.log(ans)
  let c = 0;
  c += count(rest, ans + firstChar);

  const digits = parseInt(str[0] + str[1]);
  if (digits >= 10 && digits <= 26) {
    const digitChar = String.fromCharCode(digits + 96);

    const rest = str.slice(2);
    c += count(rest, ans + digitChar);
  }

  return c;
}

function printEncodings(str) {
  // Write your code here
  count(str);
}

rl.question("", (str) => {
  printEncodings(str);
  rl.close();
});
