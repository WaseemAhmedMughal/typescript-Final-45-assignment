"use strict";
let magician = ['Zakota gin', 'Harry Potter', 'Hermione Granger', 'Ron Weasley'];
function make_greet(magicianaArray) {
    for (let i = 0; i < magicianaArray.length; i++) {
        magician[i] = 'The Greet ' + magicianaArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_greet(magician);
show_magician(magician);
