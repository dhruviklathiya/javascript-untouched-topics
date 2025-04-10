// Proxy & Reflect
// Intercept and modify operations on objects.

let handler = {
    get: (target, prop) => (prop in target ? target[prop] : "Not Found")
};
let person = new Proxy({ name: "Dhruvik" }, handler);
console.log(person.name); // Dhruvik
console.log(person.age); // Not Found
