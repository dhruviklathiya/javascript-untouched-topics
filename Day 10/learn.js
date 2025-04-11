// Generator Functions (function*)

// Yield values lazily.
function* generateID() {
    let id = 1;
    while (true) yield id++;
}
let gen = generateID();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// This is a generator function in JavaScript.
// It generates a sequence of IDs (1, 2, 3, ...) on-the-fly, without creating an array or storing all values in memory. 
// The yield keyword produces a value, but pauses the function's execution until the next value is requested. 
// This allows for efficient, lazy generation of values. {Day 10/learn.js:generateID}