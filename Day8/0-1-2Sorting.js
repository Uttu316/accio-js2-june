const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  zero_one_two_sorting(arr);
  console.log(arr.join(" "));
});

function zero_one_two_sorting(arr) {
  let z = 0;
  let o = 0;
  let t = 0;

  for (let num of arr) {
    if (num === 0) {
      z++;
    } else if (num === 1) {
      o++;
    } else {
      t++;
    }
  }
  let k = 0;
  for (let i = 0; i < z; i++) {
    arr[k] = 0;
    k++;
  }
  for (let i = 0; i < o; i++) {
    arr[k] = 1;
    k++;
  }
  for (let i = 0; i < t; i++) {
    arr[k] = 2;
    k++;
  }

  return arr;
}
