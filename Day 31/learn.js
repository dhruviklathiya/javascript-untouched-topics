// Object.with() (🧪 Stage 3 Proposal – Future of Scoped Mutations)
// This upcoming feature introduces a safer, immutable way to temporarily work with object data — similar to functional lenses or temporary state overrides.

const user = { name: 'Dhruvik', age: 24 };

const updated = Object.with(user, { age: 25 });

console.log(user.age);    // 24 (original unchanged)
console.log(updated.age); // 25

// Why it’s rare and exciting:
// Currently Stage 3 in TC39 (close to landing).

// Unlike Object.assign() or spread ({...obj, ...newProps}), this is a native, semantic method for functional-style object mutation.

// It helps in immutable state updates, especially in reducers or UI frameworks.

// 🚀 Expected to appear in future JavaScript versions. Already polyfilled in some runtimes like Babel and TypeScript playgrounds.