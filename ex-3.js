// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

for (let n = 0; n < scores.length; n++) {
  if (n === 0) {
    minScore = scores[n];
  } else if (minScore > scores[n]) {
    minScore = scores[n];
  }
}

console.log(minScore);
