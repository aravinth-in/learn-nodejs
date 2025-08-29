const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

// I/O queue callbacks are executed after Microtask queues callbacks and Timer queue callbacks are executed

/*
this is process.nextTick 1
this is Promise.resolve 1
this is setTimeout 1
this is readFile 1
*/