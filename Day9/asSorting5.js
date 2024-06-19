const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  rl.on("line", (a) => {
    const nums = a.split(" ").map(Number);
    const ans = sorting5(nums.length, nums);
    console.log(ans);
    rl.close();
  });
});

function sorting5(n, arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let x = arr[0];
  let y = arr[1];
  let w = arr[n - 1];
  let z = arr[n - 2];

  return w * z - x * y;
}
