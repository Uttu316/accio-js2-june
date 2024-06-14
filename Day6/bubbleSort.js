const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (N) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    bubbleSort(N, arr);
    console.log(arr.join(" "));
    readline.close();
  });
});

function bubbleSort(n, arr) {
  for (let j = 0; j < n - 1; j++) {
    for (let i = 0; i < n - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
  // console.log(arr)

  function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
}
