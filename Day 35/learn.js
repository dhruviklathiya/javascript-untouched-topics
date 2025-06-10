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
