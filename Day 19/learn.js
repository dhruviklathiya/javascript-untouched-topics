// ResizeObserver
// Watches element size changes.

let ro = new ResizeObserver(entries => {
    for (let entry of entries) {
        console.log(entry.contentRect.width);
    }
});
ro.observe(document.body);
