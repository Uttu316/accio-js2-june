let nArr = [1, 2, 3];

let s = new Set(nArr);

s.add("a");
s.add("ab");
s.add("b");
s.add("a");
s.delete("a");

const isPresent = s.has("a");

const arr = Array.from(s);
console.log(s, isPresent, arr);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
