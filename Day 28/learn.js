// Array.prototype.at() – Negative Indexing in Arrays

// Introduced in ES2022, .at() lets you access array elements from the end using negative indices—cleaner and safer than using .length - 1.

const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits.at(0));   // 'apple'
console.log(fruits.at(-1));  // 'cherry'
console.log(fruits.at(-2));  // 'banana'

// Why it's uncommon but awesome:
// No need to write array[array.length - 1].
// Works on strings too:

console.log("Dhruvik".at(-1)); // 'k'