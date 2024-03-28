// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print 
// a message indicating the number of people you are inviting to dinner.


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
 
// console.log(`Mr. ${absent_Guest} is not coming to the party.`);

// console.log('Good News ! we find Big Table so we are inviting 3 more guests.');
//array me 3 guest add kiye hain.
Guest_List.unshift('Amin Alam');
Guest_List.splice(2 , 0 , 'ABDULLAH SHEIKH') ;
Guest_List.push('Hani');

// yahan par many 6 guest ko array me print karwaya hai.
// for (let i=0; i<Guest_List.length; i++){
    // console.log('Dear Mr :' + Guest_List[i] + ',\n\nIt you pleasure invit to you in our party.\n\nThank You\n\n')
// }
// sorry massege guest for not inviting.
// console.log('\nSorry can note arrange b ig table , only two Peoples will be Invited.')
// yahan par many guest remove kiye hiain.
while(Guest_List.length > 2 ){
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, You are Not anvited For Dinner ,`);
}
//hamry bachy howe invited 2 guest.
// for (let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr :' + Guest_List[i] + ',\n\nYou are stil anvited \n\nThank You\n\n');
// }
//many sary guest array say remove kardiye hen.
Guest_List.splice(0, 2);
console.log(Guest_List);

//Exercise 19
//print a massege indicating the number of people you are inviting to dinner .
console.log(`Total number of Guest Are: ${Guest_List.length}`);