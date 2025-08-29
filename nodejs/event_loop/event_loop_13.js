setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));

for (let i = 0; i < 1000000000; i++) {}

// Timer anamoly. Order of execution can never be guaranteed. Add time consuming for loop to guarante the order.

/*
this is setTimeout 1
this is setImmediate 1
*/