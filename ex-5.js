// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";
let Char = [];

for (let letter of companyName) {
  Char.push(letter);
}

for (let n = 0; n < Char.length; n++) {
  console.log("Number " + (n + 1) + " character is " + Char[n]);
}
