"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinalEndig;
    if (num === 1) {
        ordinalEndig = 'st';
    }
    else if (num === 2) {
        ordinalEndig = 'nd';
    }
    else if (num === 3) {
        ordinalEndig = 'rd';
    }
    else {
        ordinalEndig = 'th';
    }
    console.log(`${num} ${ordinalEndig}`);
}
