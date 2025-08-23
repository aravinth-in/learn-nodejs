const upperCase = require("upper-case").upperCase;

function greet(name){
    console.log(upperCase(`Hello ${name}, welcome to on-chain`));
}

greet("WallStreet");
module.exports = greet;