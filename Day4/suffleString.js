const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function shuffleString(arr, str) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    const ch = str[i];
    const pos = arr[i];

    ans[pos] = ch;
  }

  console.log(ans.join(""));
}

readline.question("", (n) => {
  readline.question("", (str) => {
    readline.question("", (arr) => {
      arr = arr.split(" ").map(Number);
      shuffleString(arr, str);
      readline.close();
    });
  });
});
