// Atomics and SharedArrayBuffer (Thread-Safe Operations)
// Used for low-level parallel computing.

let buffer = new SharedArrayBuffer(16);
let view = new Int32Array(buffer);
Atomics.store(view, 0, 42);
console.log(Atomics.load(view, 0)); // 42