const DrinkMachine = require("./drink-machine.js");
const PizzaShop = require("./pizza-shop.js");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a pizza ${size} with ${topping}`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
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