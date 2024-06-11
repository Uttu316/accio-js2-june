const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (str) => {
    toggleCase(n, str);
    readline.close();
  });
});

function toggleCase(n, str) {
  // your code here

  //have a variable for new string
  let newStr = "";

  //loop the string
  for (let i = 0; i < str.length; i++) {
    //check every character
    const char = str[i];

    // if character is uppercase then covert into the lowerCase and add it in new string
    if (char.toUpperCase() == char) {
      newStr += char.toLowerCase();
    } else {
      newStr += char.toUpperCase();
    }
  }
  console.log(newStr);
}
