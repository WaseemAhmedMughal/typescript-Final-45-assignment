"use strict";
let magician = ['Zakota gin', 'Harry Potter', 'Hermione Granger', 'Ron Weasley'];
function copyArray(arr) {
    return [...arr];
}
;
function make_greet(magicianaArray) {
    for (let i = 0; i < magicianaArray.length; i++) {
        magicianaArray[i] = 'The Greet ' + magicianaArray[i];
    }
    ;
}
;
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
;
const copyMagicianArray = copyArray(magician);
make_greet(copyMagicianArray);
console.log(`'This is my original Array:'\n`);
show_magician(magician);
console.log(`\n'This is my modidfied of the Array:'\n`);
show_magician(copyMagicianArray);
