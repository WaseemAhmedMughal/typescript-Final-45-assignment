// Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that 
// prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that 
// person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, 
// letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to 
// make sure you actually have an empty list at the end of your program


let Guest_List :string[] = ['Sir Zia Khan','Kamran Khan Tessori','Daniyal Nagori'] ;
// for (let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr :' + Guest_List[i] + ',\n\nIt you pleasure invit to you in our party.\n\nThank You\n\n')
// }

let absent_Guest :string = 'Sir Zia Khan';

let new_Guest :string = 'Hina Naseer';

Guest_List[0] = new_Guest ;

// for (let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr :' + Guest_List[i] + ',\n\nIt you pleasure invit to you in our party.\n\nThank You\n\n')
// }
 
console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News ! we find Big Table so we are inviting 3 more guests.');
//array me 3 guest add kiye hain.
Guest_List.unshift('Amin Alam');
Guest_List.splice(2 , 0 , 'ABDULLAH SHEIKH') ;
Guest_List.push('Hani');

// yahan par many 6 guest ko array me print karwaya hai.
for (let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr :' + Guest_List[i] + ',\n\nIt you pleasure invit to you in our party.\n\nThank You\n\n')
}
// sorry massege guest for not inviting.
console.log('\nSorry can note arrange b ig table , only two Peoples will be Invited.')
// yahan par many guest remove kiye hiain.
while(Guest_List.length > 2 ){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are Not anvited For Dinner ,`);
}
//hamry bachy howe invited 2 guest.
for (let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr :' + Guest_List[i] + ',\n\nYou are stil anvited \n\nThank You\n\n');
}
//many sary guest array say remove kardiye hen.
Guest_List.splice(0, 2);
console.log(Guest_List);
