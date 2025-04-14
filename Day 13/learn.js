// structuredClone() (Deep Cloning)
// Clones objects, unlike Object.assign() or spread ...

let obj = { a: 1, b: { c: 2 } };
let clonedObj = structuredClone(obj);
obj.b.c = 42;
console.log(clonedObj.b.c); // 2