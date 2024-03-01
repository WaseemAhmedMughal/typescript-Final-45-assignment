//assignment 02 Person name

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