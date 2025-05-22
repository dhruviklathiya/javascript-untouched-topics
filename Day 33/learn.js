// BroadcastChannel – Communicate Between Tabs, Windows, or Iframes
// BroadcastChannel is a built-in browser API that allows multiple tabs (or iframes/windows from the same origin) to send messages to each other in real time, without using cookies, localStorage polling, or service workers.

// In Tab A
const channel = new BroadcastChannel('notifications');
channel.postMessage('Hello from Tab A');

// In Tab B
const anotherChannel = new BroadcastChannel('notifications');
anotherChannel.onmessage = (event) => {
  console.log('Received:', event.data); // "Hello from Tab A"
};

// Why it’s uncommon but incredibly useful:
// Enables real-time sync across tabs (e.g. logout, dark mode toggle, cart update).

// Works instantly and natively without external libraries.

// No server, WebSocket, or polling required.

// Bonus Use Case: Auto logout in all tabs
// On logout
channel.postMessage('logout');

// In all other tabs
channel.onmessage = (e) => {
  if (e.data === 'logout') {
    window.location.href = '/login';
  }
};
