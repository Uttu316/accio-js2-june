const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  console.log(isPalindrome(str));
  rl.close();
});

function isPalindrome(str) {
  //convert all in lower case
  str = str.toLowerCase();

  let newStr = "";
  //extract all alphabets
  for (let ch of str) {
    if (ch >= "a" && ch <= "z") {
      newStr += ch;
    }
  }

  let n = newStr.length;

  //check if new string is palindrome
  let isPalindrom = 1;
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    if (newStr[i] !== newStr[j]) {
      isPalindrom = 0;
      break;
    }
  }

  // let i =0
  // let j = n-1
  // while(i<j){
  //   if(str[i]!==str[j]){
  //         isPalindrom = false
  //         break
  //     }
  //     i++
  //     j--
  // }

  // console.log(isPalindrom)
  return isPalindrom;
}
