const person = { name: "Dhruvik", age: 25 };
with (person) {
    console.log(name); // "Dhruvik"
    console.log(age); // 25
}
