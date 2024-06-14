let obj = {
  city: "Agra",
};

let name = "name";
//when keyName is variable
obj[name] = "Utkarsh";

//when the keyName is certain use obj.keyName
obj.age = 25;

obj.city = "Pune";

// delete obj.age
obj["age"]++;

console.log(obj["name"]);
console.log(obj);

let obj = {
  name: "ABC",
  age: 26,
};

const keyName = window.prompt("Enter Key name");

const value = window.prompt("Enter value");

obj[keyName] = value;

console.log(obj);

let arr = [2, 3, "name", 2, 1];

let obj = {};
for (let keyName of arr) {
  if (obj[keyName]) {
    obj[keyName] += 1;
  } else {
    obj[keyName] = 1;
  }
}
