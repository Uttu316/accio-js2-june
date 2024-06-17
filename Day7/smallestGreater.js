var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

  console.log(smallestGreaterElements(Arr).join(" "));
}

function smallestGreaterElements(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];

    let minDiff = Infinity;
    let smallestY = -10000000;

    for (let j = 0; j < arr.length; j++) {
      const y = arr[j];
      if (y > x) {
        const diff = y - x;
        if (diff < minDiff) {
          minDiff = diff;
          smallestY = y;
        }
      }
    }

    ans.push(smallestY);
  }
  return ans;
}
