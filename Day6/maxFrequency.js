const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (s) => {
  console.log(MaximumFrequencyChar(s));
  readline.close();
});
function MaximumFrequencyChar(str) {
  //list of 26 position to store occurence of every char
  let arr = new Array(26).fill(0);

  //iterate ever char
  for (let ch of str) {
    //get ascii of each char
    const ascii = ch.charCodeAt();
    //covert it into 0 based position
    let pos = ascii - 97;
    //update occurence of char on its position
    arr[pos]++;
  }

  //to find maximumn value, start with least minimum
  let max = -Infinity;
  //position always starts from 0 so -1 is safe to use
  let maxPos = -1;

  //need simple to to know position
  for (let i = 0; i < arr.length; i++) {
    //current is bigger then max
    if (arr[i] > max) {
      //update max and its position
      max = arr[i];
      maxPos = i;
    }
  }
  //find ascii of maxPos beacuse need to know char
  const ascii = maxPos + 97;
  //from ascii value, we can get char
  const ans = String.fromCharCode(ascii);
  // console.log(ans)

  return ans;

  // let obj  = {}

  // for(let i of s){
  //     if(obj[i]){
  //         obj[i]+=1
  //     }else{
  //         obj[i]=1
  //     }
  // }

  // let maxChar = ""
  // let max = -Infinity

  // for(let key in obj){
  //      const value = obj[key]
  //     if(value>max ){
  //         max = value
  //          maxChar = key
  //     }
  //     if(max==value){
  //         if(maxChar>key){
  //             maxChar = key
  //         }
  //     }

  // }
  // return maxChar
}
