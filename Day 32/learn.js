// document.hasFocus() – Detect If Tab Is Active
// A subtle but powerful method that lets your app know whether the current browser tab is active — super useful for optimizing resource usage, pausing animations, or stopping background API calls.

if (document.hasFocus()) {
  console.log("User is actively viewing this tab.");
} else {
  console.log("User is on another tab or window.");
}

// Common use case: Pause logic when tab is inactive
const interval = setInterval(() => {
  if (!document.hasFocus()) return; // skip work
  console.log("Doing background task...");
}, 1000);

// Bonus: Combine with visibilitychange event
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    console.log("Tab is hidden, pause stuff.");
  } else {
    console.log("Tab is visible again.");
  }
});

// 🧠 Great for improving performance, battery life, and user experience in browser apps.