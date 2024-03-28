//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.
// 
// • If the alien is red, print a message that the player earned 15 points.

//chalk ko import kia is ko mainy add kia projict me 

import chalk from "chalk";
// version 1
// variable banya string difined kia 
let alien_colors:string = 'Green';
// if esle ki condition laga kar message print karwaya.
if (alien_colors === 'Green') {
console.log(chalk.green('Version 1! Player earn 5 points !'));
} else if (alien_colors === "Yellow") {
    console.log(chalk.yellow(" Version 2! Player earn 10 points !"));
    
} else if (alien_colors === "Red") {
    console.log(chalk.red("Version 3! Player earn 15 points !"));
    
}else {
    console.log(chalk.redBright("Version 4! Player Select right color"));
    
}




 /// version 2
 // veriable ki value change ki
 alien_colors = "Yellow"
//if else ki codition laga kar version 2 ki value print karwai
if (alien_colors === 'Green') {
console.log(chalk.green('Version 1! player earn 5 points !'));
} else if (chalk.yellow(alien_colors === "Yellow")) {
    console.log(chalk.yellow("Version 2! Player earn 10 points !"));
    
} else if (alien_colors === "Red") {
    console.log(chalk.red("Version 3! Player earn 15 points !"));
    
}else {
    console.log(chalk.redBright("Version 4! Player Select right color"));
    
}
//version 3
// veriable ki value change ki
alien_colors = "Red"
//if else ki codition laga kar version 3 ki value print karwai

if (alien_colors === 'Green') {
console.log(chalk.green('Version 1! player earn 5 points !'));
} else if (alien_colors === "Yellow") {
    console.log(chalk.yellow("Version 2! Player earn 10 points !"));
    
} else if (alien_colors === "Red") {
    console.log(chalk.red("Version 3! Player earn 15 points !"));
    
}else {
    console.log(chalk.redBright("Version 4! Player Select right color"));
    
}
//version 4
alien_colors = " ";

if (alien_colors === 'Green') {
console.log(chalk.green('Version 1! player earn 5 points !'));
} else if (alien_colors === "Yellow") {
    console.log(chalk.yellow("Version 2! Player earn 10 points !"));
    
} else if (alien_colors === "Red") {
    console.log(chalk.red("Version 3! Player earn 15 points !"));
    
}else {
    console.log(chalk.bgRedBright("Version 4! Player Select right color"));
    
}