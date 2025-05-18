// queueMicrotask() – Schedule Microtasks Precisely

// queueMicrotask() lets you schedule a callback to run after the current operation, but before the next rendering or macro task — essentially, it's a more precise Promise.then() without the overhead.

console.log('Start');

queueMicrotask(() => {
console.log('This runs *after* current call stack but *before* setTimeout');
});

setTimeout(() => {
console.log('Timeout');
}, 0);

console.log('End');

// Expected output:
// Start
// End
// This runs *after* current call stack but *before* setTimeout