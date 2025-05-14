// Object.freeze() – Deep-Freezing Objects
// Prevents modifications to an object at the top level (properties can’t be added, removed, or changed).

const user = Object.freeze({ name: "Dhruvik", skills: ["JS", "Next.js"] });
user.name = "Changed"; // Ignored in strict mode
user.skills.push("React"); // Allowed – nested objects are not frozen!