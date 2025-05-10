// Symbol – Custom, Hidden Object Property Keys
// Symbols are unique and not enumerable, making them perfect for creating private or non-colliding keys in objects.

const ID = Symbol('id');
const user = {
  name: 'Dhruvik',
  [ID]: 12345
};

console.log(user);             // { name: 'Dhruvik', [Symbol(id)]: 12345 }
console.log(Object.keys(user)); // ['name'] – Symbol is hidden
console.log(user[ID]);         // 12345
