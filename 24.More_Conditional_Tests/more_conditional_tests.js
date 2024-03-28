"use strict";
// equality test 1
console.log("equality test with strings: ", "apple" === "apple");
// Inequality test 2
console.log("Inequality test with strings: ", "apple" != "banan");
// test using the lower case fanction test 3
console.log("lower case fanction test: ", "APPLE".toLowerCase() === "apple");
// numerical test involving equality test 4
console.log("numerical equality test: ", 100 === 100);
// numerical test involving Inequality test 
console.log("numerical inequality test: ", 10 != 100);
//greater than 
console.log("greater than test: ", 10 > 5);
//less than 
console.log("less than test: ", 10 < 25);
//greater than equal to
console.log("greater than equal test: ", 10 >= 10);
//less than equal to
console.log("less than equal test: ", 5 <= 10);
// Testing using and operator
console.log("Using and operator test: ", 5 === 5 && 10 > 5);
// Testing using || operator
console.log("Using || operator test: ", 5 === 5 || 10 > 15);
// Test whether an item is in a array
const fruit = ["Mango", "Water Melon", "Strawberry", "kiwi"];
console.log('Test "Water Melon" in the array: ', fruit.includes("Water Melon"));
// Test whether an item is not in a array
console.log('Test "banana" in the array: ', !fruit.includes("banana"));
