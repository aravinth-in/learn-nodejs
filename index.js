const PizzaShop = require("./pizza-shop.js");

const pizzaShop = new PizzaShop();
pizzaShop.order();
pizzaShop.displayOrderNumber();

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// // Multiple listeners to a single event
// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Order received! Baking a pizza ${size} with ${topping}`);
// });

// emitter.on("order-pizza", (size) => {
//   if(size == "large"){
//     console.log("Serving complimentary drink");
//   }
// });

// console.log("Before events");
// emitter.emit("order-pizza", "large", "mushroom");