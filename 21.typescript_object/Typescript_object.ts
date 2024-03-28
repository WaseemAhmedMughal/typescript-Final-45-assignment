
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.


import { CaaRecord } from "dns";

//Data type of person objict 
interface person {
    Name : string
    age : number
    nationality :string
    student : boolean
};
// person objict 
let person :person = {

    Name :'Waseem Ahmed',
    age : 35,
    nationality : 'Pakistan',
    student : true
};
//print person  
console.log(person);
 
//data types of car objict
interface Car {
    Makar : string
    Color :string
    Automatic :boolean
    Hybrid : boolean
};

//car objict
let Car :Car = {
    Makar : 'Kia',
    Color : 'Black',
    Automatic : false,
    Hybrid :true
};
//print car
console.log(Car);

interface Bike {
    Makar :string,
    Model :number,
    color :string,
    Disk_Break :boolean,

};
let Bike :Bike = {
    Makar:'SUzuki',
    Model :2024,
    color :'Red',
    Disk_Break :true,
};

console.log(Bike);

