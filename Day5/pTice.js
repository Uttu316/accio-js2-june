const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ptice(n, ans) {
  let adrian = "ABC";
  let bruno = "BABC";
  let goran = "CCAABB";

  let a = 0;
  let b = 0;
  let g = 0;

  for (let i = 0; i < ans.length; i++) {
    const ch = ans[i];

    if (adrian[i % 3] === ch) {
      a++;
    }
    if (bruno[i % 4] === ch) {
      b++;
    }
    if (goran[i % 6] === ch) {
      g++;
    }
  }

  const highest = Math.max(a, b, g);

  console.log(highest);
  if (highest === a) {
    console.log("Adrian");
  }
  if (highest === b) {
    console.log("Bruno");
  }
  if (highest === g) {
    console.log("Goran");
  }
}

readline.question("", (n) => {
  readline.question("", (key) => {
    ptice(parseInt(n), key);
    readline.close();
  });
});
