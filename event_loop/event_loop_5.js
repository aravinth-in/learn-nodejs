setTimeout(() => console.log("this is setTimeout 1"), 1000);
setTimeout(() => console.log("this is setTimeout 2"), 500);
setTimeout(() => console.log("this is setTimeout 3"), 0);

// Timer queue callbacks are executed in FIFO orde
// Note : The timer queue in Node.js is not a simple FIFO queue. 
// Internally, Node.js (via libuv) uses a min heap (priority queue) to manage timers.

/*
this is setTimeout 3
this is setTimeout 2
this is setTimeout 1
*/