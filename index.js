const superHero = require("./super-hero");
console.log(superHero.getName());
superHero.setName("Superman");
console.log(superHero.getName());

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName());

/*
Output:
Batman
Superman
Superman - due to Module caching (node cache the require("./super-hero") and objects are passed by reference) 
*/