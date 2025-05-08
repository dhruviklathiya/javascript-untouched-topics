// AbortController (Cancel Fetch Requests)

let controller = new AbortController();
let signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/posts', { signal })
    .then(response => response.json())
    .then(console.log)
    .catch(err => console.log(err.name)); // "AbortError"

controller.abort(); // Cancels the request