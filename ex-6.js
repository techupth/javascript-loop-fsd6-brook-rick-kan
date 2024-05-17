// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let i = 0;
while (i < companyName.length) {
    reversedCompanyName = companyName[i] + reversedCompanyName;
    i++;
}

console.log(reversedCompanyName);
