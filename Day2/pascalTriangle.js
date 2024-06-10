const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  let triangle = pascalTriangle(parseInt(n));
  for (let i = 0; i < triangle.length; i++) {
    console.log(triangle[i].join(" "));
  }
  readline.close();
});

function pascalTriangle(numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        row.push(1);
      } else {
        let curr = arr[i - 1][j - 1] + arr[i - 1][j];
        row.push(curr);
      }
    }
    arr.push(row);
    //   console.log(arr)
  }
  return arr;
}
