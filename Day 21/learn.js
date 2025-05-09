// Object.observe() (Historical, Now Removed but Cool Concept)

// This was an experimental feature that allowed observing changes to JavaScript objects directly, like a built-in reactive system.

// Note: It was removed from browsers, but understanding it gives insight into how modern frameworks like Vue/React evolved.

// Historical use only (no longer supported)
Object.observe(user, function(changes) {
    changes.forEach(function(change) {
        console.log(change.type, change.name, change.oldValue);
    });
});

// Modern
const user = {
    name: "Dhruvik",
    age: 23,
};

const observedUser = new Proxy(user, {
    set(target, prop, value) {
    console.log(`Property '${prop}' changed from ${target[prop]} to ${value}`);
    target[prop] = value;
    return true;
    }
});

observedUser.age = 24; // Logs: Property 'age' changed from 23 to 24
