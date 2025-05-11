// Function.prototype.toString() Returns Actual Source Code (With Comments!)

// Since ES6, calling .toString() on a function returns its exact source code, including whitespace and comments — unlike in older JavaScript versions where it returned a standardized format.

function sayHello(name) {
    // This function says hello
    return `Hello, ${name}!`;
}

    console.log(sayHello.toString());