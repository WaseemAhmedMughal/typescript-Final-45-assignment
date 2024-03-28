// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the 
// results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

import { equal } from "assert";
import { log } from "console";


// create car variable
let car = "subaru";

// test 1
// car equal hai data type k sath sabaru. use ===
console.log("Is Car === 'subaru' ? I predict True.");
console.log(car === 'subaru');

// test 2
// car equal hai sabaru k .use ==
console.log("Is Car == 'subaru' ? I predict True.");
console.log(car == 'subaru');

// test 3
// car not equal bus k .use !=
console.log("Is Car != 'bus' ? I predict True.");
console.log(car != 'bus');

// test 4
// car not equal data type number k sabaru . use !==
console.log("Is Car !== 123 ? I predict True.");
console.log(car !== '123');

// test 5
// car not equal upercase k sabaru .use !=
console.log("Is Car.upercase != 'subaru' ? I predict True.");
console.log(car.toUpperCase() != 'subaru');

// test 6
// car not equal SABARU k . use ==
console.log("Is Car == 'SUBARU' ? I predict false.");
console.log(car === 'SUBARU');

// test 7
// car upercase not equal data type chack sabaru . use ===
console.log("Is Car.upercase === 'subaru' ? I predict false.");
console.log(car.toUpperCase() === 'subaru');

// test 8
// car not equal sabaru k . use !=
console.log("Is Car != 'subaru' ? I predict false.");
console.log(car != 'subaru');

// test 9
// car not equal bike k . use ==
console.log("Is Car == 'bike' ? I predict false.");
console.log(car == 'bike');

// test 10
// car not equal plain k use. ===
console.log("Is Car === 'plian' ? I predict false.");
console.log(car === 'plain');
