// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
// make_great() that modifies the array of magicians by adding the phrase the Great to 
// each magician’s name. Call show_magicians() to see that the list has actually been modified

let magician:string [] = ['Zakota gin', 'Harry Potter', 'Hermione Granger','Ron Weasley']

function make_greet(magicianaArray:string[]) {
    for (let i = 0; i <magicianaArray.length; i++) {

        magician[i] = 'The Greet ' + magicianaArray[i]
    }
}

function show_magician(magicians:string[]) {
    magicians.forEach(element => {
        console.log(element);
        
    });

}
make_greet(magician)

show_magician(magician)