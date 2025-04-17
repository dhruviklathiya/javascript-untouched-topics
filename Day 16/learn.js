// performance.now() (High-Precision Timing)
// More accurate than Date.now()

let start = performance.now();
for (let i = 0; i < 1e6; i++) {}
let end = performance.now();
console.log(`Execution time: ${end - start} ms`);