// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed


import { reverse } from "dns";
import { listenerCount } from "process";

//store the loction in a array, make the array is not alphabetical oder.
let places :string[] = ['Baba Farid', 'Lal Shehbaz Qalandar', 'Norani', 'Abdulallah Shah Qazi', 'Khowaja Garib Nawaz']

//printing your array in its orignal order.
console.log('Orignal '+ places);

//print the array in alphabetical order whitout modifying the actual list.
console.log('copy ' + [...places].sort());

//show that your array is still in its orignal order by printing it.
console.log('Orignal '+places);

//printing your array in reverse alphabetical order with out changing the order of the orignal list .
console.log('copy ' +[...places].sort().reverse());

//show that your array is stillin its orignal order by printing it again.
console.log('Orignal '+places);

//reverse the order of your list . print the array to show that its order has changed.
console.log('Orignal '+places.reverse());

// reverse the order of your list again. print the list to show it's back to its orignal order .
console.log('Orignal '+places.reverse());

//sort your array so it's stored in alphabetical order . print the array to show that itds order has been changed. 
console.log('Orignal '+places.sort());

//sort to change your array so it's stored in reverse alphabetical order . print list to show that its order has changed .
console.log('Orignal '+places.sort().reverse());
