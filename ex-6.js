// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";
let word = [];

for (let letter of companyName) {
  word.push(letter);
}
console.log(word);

for (let n = 0; n < word.length; n++) {
  reversedCompanyName =
    word[n] +
    word[n - 1] +
    word[n - 2] +
    word[n - 3] +
    word[n - 4] +
    word[n - 5] +
    word[n - 6] +
    word[n - 7] +
    word[n - 8] +
    word[n - 9] +
    word[n - 10] +
    word[n - 11] +
    word[n - 12] +
    word[n - 13] +
    word[n - 14];
}

console.log(reversedCompanyName);
