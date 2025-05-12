// Function.prototype.constructor – Functions That Create Functions

// Every function in JavaScript is created by the Function constructor behind the scenes — and you can use it manually to dynamically create new functions.

const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 3)); // 5


function greet(name) {
    return `Hello, ${name}`;
}

const copyOfGreet = greet.constructor('name', 'return `Hello, ${name}`');
console.log(copyOfGreet('Dhruvik')); // Hello, Dhruvik
