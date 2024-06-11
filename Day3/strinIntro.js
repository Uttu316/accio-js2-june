let s1 = "A_b_c-d";

console.log(s1.split("_"));

let s2 = "       X Y Z       ";

console.log(s2.trim());

console.log(s1[4]);
console.log(s1.at(5));

console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

let out = s2.trim();
let ans = out.toLowerCase();
console.log(ans);

console.log(s2.trim().toLowerCase());

let s3 = "x12Y@.com     ";

console.log(s3.toLowerCase().trim());

let s4 = "abkdef";

// console.log(s4.charCodeAt()) // gives you ascii value

for (let i = 0; i < s4.length; i++) {
  console.log(s4.charCodeAt(i) - 96);
}

let s5 = "ABCDZ";

for (let i = 0; i < s5.length; i++) {
  console.log(s5.charCodeAt(i) - 64);
}

const x = 36;

console.log(String.fromCharCode(x));
