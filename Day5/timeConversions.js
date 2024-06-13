const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function timeConversion(str) {
  let period = str.slice(-2);
  let hr = str.substring(0, 2);

  let newHr = "";
  if (period === "PM" && hr === "12") {
    newHr = hr;
  } else if (period === "PM" && hr !== "12") {
    newHr = parseInt(hr) + 12;
  } else if (period === "AM" && hr === "12") {
    newHr = "00";
  } else {
    newHr = hr;
  }

  const remain = str.slice(2, -2);

  console.log(newHr + remain);
}

readline.question("", (s) => {
  timeConversion(s);
  readline.close();
});
