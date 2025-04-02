// Object.defineProperty() & Object.defineProperties()
// Allows defining properties with fine-grained control (e.g., making a property non-enumerable).

const obj = {};
Object.defineProperty(obj, 'secret', {
    value: 'hidden',
    writable: false,
    enumerable: false,
    configurable: false
});
console.log(obj.secret);
console.log(Object.keys(obj));
