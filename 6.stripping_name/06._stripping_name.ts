//assignment 06
// Stripping Names: Store a person’s name, and include some whitespace characters at 
// the beginning and end of the name. Make sure you use each character combination,
//  "\t" and "\n", at least once. Print the name once, so the whitespace around the 
//  name is displayed. Then print the name after striping the white spaces.


// Storing the Person Name a varibale with the white spaces

const personName :string = '    \n\tKamran Khan Tessori\t\n   ';

//printing the person name white sapces 

console.log(personName)

// Storing the Person Name print once stripping the white spaces in variable

const without_whitespace :string = personName.trim();

//then print affter white spaces

console.log(without_whitespace)