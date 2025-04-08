// Map vs WeakMap
// WeakMap keys must be objects and are weakly held (preventing memory leaks).

let map = new Map();
let weakMap = new WeakMap();

let obj = {};
map.set(obj, "value");
weakMap.set(obj, "value");

obj = null; // WeakMap entry is removed automatically
