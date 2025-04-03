// with Statement (Rarely Used)
// Allows shorthand access to object properties but is discouraged due to scope confusion.

const person = { name: "Dhruvik", age: 25 };
with (person) {
    console.log(name); // "Dhruvik"
    console.log(age); // 25
}
