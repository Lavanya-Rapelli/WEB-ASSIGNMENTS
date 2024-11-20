// 3 types of modules

// custom
// node internal
// community models

const fs = require('fs');
const isOdd = require("is-odd");
const {add, sub} = require("./cals")


// function add (a , b){
//     return a + b
// }
// function subtract (a , b){
//     return a - b
// }
// function multiply (a , b){
//     return a * b
// }
// function divide (a , b){
//     return a / b
// }

console.log(isOdd(4));
console.log(isOdd(5));

console.log(add(3,3), sub(5,3));


