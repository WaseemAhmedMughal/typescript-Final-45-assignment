//assignment 02
//Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”



// Storing the Person Name a varibale

let PersonName :string = '';


PersonName = prompt ('what your name ?') || '';

//Printing a massege in the Person Name

if (PersonName !== null && PersonName !== ''){
    alert (`hello ${PersonName}, would you like to learn same python today?`)
    }
    else{
        alert('you have to fill your name')
        }