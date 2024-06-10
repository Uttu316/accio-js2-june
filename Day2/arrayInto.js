let arr = ["Sujata", "Anamika", "Ali", "Aditya"];

arr.push("Annu"); //adds value in the end
arr.shift(); // removes value from the begining
arr.unshift(-1); // adds the value in the beginning
arr.pop(); // removes the last value from arr

console.log(arr);

//simple for loop to iterate an array based on index
for (let i = 0; i < arr.length; i++) {
  var value = arr[i];
}

for (let item of arr) {
  console.log(item);
}

// _____________________________________________________

let arrX = [];

arrX.push(4, 3, 5, 10, 9);
arrX.unshift(-1);

var sum = 0;

for (let i = 0; i < arrX.length; i++) {
  var value = arrX[i];
  sum += value;
}
console.log(sum % (arrX.length * arr[2]));

//add values by push  4,3,5,10,9
// add -1 in the begining

//get the sum of value in array

// modulus the sum by (array's length*3rd position element)

// _______________________________________________________________________

let dArr = [
  [5, 6, 7],
  [9, 2, 4],
  [1, 2, 3],
];

var total = 0;
for (let i = 0; i < dArr.length; i++) {
  const value = dArr[i];
  var sum = 0;
  for (let j = 0; j < value.length; j++) {
    total += dArr[i][j];
    sum += dArr[i][j];
  }
  console.log(sum);
}

console.log(total);
//sum of each row
//sum of whole 2d Array

// ____________________________________

for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

/*

*
**
***
****
*****

*/

// _________________________________________________

let narr = [];
for (let i = 0; i < 5; i++) {
  let row = [];
  for (let j = 0; j <= i; j++) {
    if (j === 0 || i === j) {
      row.push(1);
    } else {
      row.push("*");
    }
  }
  narr.push(row);
  //   console.log(narr)
}
print();

function print() {
  for (let i = 0; i < narr.length; i++) {
    console.log(narr[i].join(" ")); // join elements seprated by space
  }
}
