// Set and WeakSet
// Set stores unique values, while WeakSet allows garbage collection.

let set = new Set([1, 2, 3, 3]);
console.log(set); // {1, 2, 3}

let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
