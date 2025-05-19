// history.pushState() & popstate – Manipulate Browser URL Without Reload
// This uncommon but powerful browser API lets you change the URL and handle back/forward navigation manually — critical for SPAs (Single Page Apps) without full reloads.
// Change the URL without reloading the page
history.pushState({ page: 1 }, "Title 1", "?page=1");

window.addEventListener("popstate", (event) => {
console.log("Navigated!", event.state);
});

// Why it’s special:
// Enables dynamic, seamless navigation (like React Router).
// Useful for:
// Modal navigation (?modal=signup)
// Filters & tab states in URLs
// In-app history stack
history.replaceState({ page: 2 }, "Title 2", "?page=2");
// Same as pushState, but doesn’t add a new history entry
