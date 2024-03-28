// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of 
// magicians’ names. Because the original array will be unchanged, return the new array and 
// store it in a separate array. Call show_magicians() with each array to show that you have 
// one array of the original names and one array with the Great added to each magician’s name.

let magician:string [] = ['Zakota gin', 'Harry Potter', 'Hermione Granger','Ron Weasley'];

function copyArray(arr:string[]) {
    
    return [...arr]
};


function make_greet(magicianaArray:string[]) {
    for (let i = 0; i <magicianaArray.length; i++) {

        magicianaArray[i] = 'The Greet ' + magicianaArray[i]
    };
};

function show_magician(magicians:string[]) {
    magicians.forEach(element => {
        console.log(element);
        
    });
};
const copyMagicianArray = copyArray(magician);

make_greet(copyMagicianArray);

console.log(`'This is my original Array:'\n`);
show_magician(magician);
console.log(`\n'This is my modidfied of the Array:'\n`);
show_magician(copyMagicianArray);
