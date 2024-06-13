const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline.question("", (num) => {
  n = parseInt(num);
  readArray(0);
});

function readArray(i) {
  if (i < n) {
    readline.question("", (word) => {
      arr.push(word);
      readArray(i + 1);
    });
  } else {
    let result = getStrings(arr);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    readline.close();
  }
}

function getRow(char) {
  if ("qwertyuiop".includes(char)) {
    return 1;
  }
  if ("asdfghjkl".includes(char)) {
    return 2;
  }
  if ("zxcvbnm".includes(char)) {
    return 3;
  }
}

function getStrings(arr) {
  let ans = [];
  for (let word of arr) {
    let firstChar = word[0];
    const firstRowNo = getRow(firstChar);

    let isGood = true;

    for (let char of word) {
      const rowNo = getRow(char);
      if (firstRowNo != rowNo) {
        isGood = false;
        break;
      }
    }
    if (isGood) {
      ans.push(word);
    }
  }
  return ans;
}
