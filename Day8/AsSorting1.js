const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [n, m] = input[0].split(" ").map(Number);
  let mat = [];
  for (let i = 1; i <= n; i++) {
    mat.push(input[i].split(" ").map(Number));
  }
  sortCol(mat, n, m);
});

function sort(arr, n, m) {
  //number  of rows
  let rows = arr.length;

  //number of columns
  let cols = arr[0].length;

  // loop columns one by one
  for (let c = 0; c < cols; c++) {
    // start with second element of column till row's last element
    for (let i = 1; i < rows; i++) {
      let j = i - 1;
      const curr = arr[i][c]; // picked element for in column
      //while previous column value is bigger than picked element
      while (j >= 0 && curr < arr[j][c]) {
        //change position of values
        arr[j + 1][c] = arr[j][c];
        j--;
      }
      arr[j + 1][c] = curr;
    }
  }

  return arr;
}

function sortCol(arr, n, m) {
  const sortArr = sort(arr, n, m);
  for (let i = 0; i < n; i++) {
    console.log(sortArr[i].join(" "));
  }
}
