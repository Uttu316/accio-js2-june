const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline.question("", (num) => {
  n = parseInt(num);
  readline.on("line", (line) => {
    arr = line.split(" ").map(Number);
    insertionSort(arr, n);
    readline.close();
  });
});

function insertionSort(arr, n) {
  // Write your code here

  for (let i = 1; i < arr.length; i++) {
    let picked = arr[i];
    let j = i - 1;

    while (j >= 0 && picked < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = picked;
    console.log(arr.join(" "));
  }
}
