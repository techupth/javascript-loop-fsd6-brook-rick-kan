// Exercise #3: Find a Minimum Score
let studentscores = [100, 20, 3, 1000];
let minScore = studentscores[0];
// Start coding here
for (let i = 1; i < studentscores.length; i++) {
    if (studentscores[i] < minScore) {
        minScore = studentscores[i];
    }
}

console.log(minScore);

