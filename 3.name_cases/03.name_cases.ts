//assignment 03
// Name Cases: Store a person’s name in a variable, and then print that
//  person’s name in lowercase, uppercase, and titlecase.

//Storing the Person Name in a Variable

let personName :string = '';
// Person Name 
personName = prompt('What is your Name?') ||'';

//Printing the Person name in a lowercase
let lowercase :string = personName.toLowerCase() ;

//Printing the Person name in a uppercase
let uppercase :string = personName.toUpperCase() ;

//Printing the Person name in a titlecase
let titlecase :string = personName.split(' ').map(word => 
    word.charAt(0).toUpperCase() +word.slice(1).toLowerCase()).join(' ')

//Printing the condition in a person name 
if(personName !== null && personName !== ''){
    alert(`Hello ${personName},here are your name in:
    lowercse ${lowercase}
    uppercase ${uppercase}
    titlecase ${titlecase}`)
}
    else{
        alert('please fill the name')
}