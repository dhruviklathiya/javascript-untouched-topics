// MutationObserver – Watch for DOM Changes in Real Time
// MutationObserver lets you observe and react to DOM changes — like added/removed nodes, attribute updates, or text content changes — without using setInterval or expensive polling.

// ✅ Example: Log whenever a node is added
const observer = new MutationObserver((mutationsList) => {
for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
    console.log("New node(s) added or removed:", mutation.addedNodes);
    }
}
});

observer.observe(document.body, { childList: true, subtree: true });

// Try this:
const div = document.createElement("div");
div.textContent = "I'm dynamically added!";
document.body.appendChild(div);

// 🔍 Use Cases:
// Detect changes in a chat window or notifications panel.
// Automatically initialize scripts or UI when new DOM elements appear.
// Observe attribute changes (e.g. style/class mutation).

observer.observe(targetNode, { attributes: true });