// your code here
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const str = inputArr[0];
  console.log(isPangram(str));
}

function isPangram(str) {
  str = str.toLowerCase();

  //list of 26 chars to check
  let list = new Array(26).fill(false);

  //loop string
  for (let i = 0; i < str.length; i++) {
    //every char
    const ch = str[i];

    //should be alphabet
    if (ch >= "a" && ch <= "z") {
      //ascii value
      const ascii = ch.charCodeAt();
      //array based pos of character
      let pos = ascii - 97;

      //mark true at char 0 based position
      list[pos] = true;
    }
  }

  //check if any value is not marked true
  let isAnyFalse = list.includes(false);
  let isPanagram = !isAnyFalse;
  if (isPanagram) {
    return "pangram";
  } else {
    return "not pangram";
  }
}
