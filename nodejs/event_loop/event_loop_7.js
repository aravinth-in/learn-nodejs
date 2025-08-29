const fs = require("fs");

setTimeout(() => console.log("this is setTimeout 1"), 0);

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

// Timer anamoly. Order of execution can never be guaranteed.

/*
learn-nodejs % node event_loop/event_loop_7
this is setTimeout 1
this is readFile 1
learn-nodejs % node event_loop/event_loop_7
this is setTimeout 1
this is readFile 1
learn-nodejs % node event_loop/event_loop_7
this is readFile 1
this is setTimeout 1
learn-nodejs % node event_loop/event_loop_7
this is setTimeout 1
this is readFile 1
*/