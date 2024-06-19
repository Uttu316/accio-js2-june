const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  rl.on("line", (a) => {
    const arr = a.split(" ").map(Number);
    const result = isSorted(arr, N);
    console.log(result);
    rl.close();
  });
});

function isSorted(arr, n) {
  let s = -1;
  //find starting point of sub array
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      s = i;
      break;
    }
  }

  if (s === -1) {
    return "Yes"; // alread sorted
  }

  let e = -1;

  //find the endpoint of sub array
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      e = i;
      break;
    }
  }

  //sub array has to be reversely sorted
  for (let i = s; i < e; i++) {
    if (arr[i] > arr[i + 1]) {
      continue;
    } else {
      return "No";
    }
  }

  // starting position element has to be smaller than end +1 element
  if (e != n - 1 && arr[s] > arr[e + 1]) {
    return "No";
  }
  // end position element has to be bigger than starting -1 element
  if (s != 0 && arr[e] < arr[s - 1]) {
    return "No";
  }
  return "Yes";
}
