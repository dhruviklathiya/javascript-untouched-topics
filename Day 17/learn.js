// history.pushState() & history.replaceState()
// Modify browser history without reloading the page.

history.pushState({ page: 1 }, "Title", "?page=1");
console.log(location.search); // ?page=1
