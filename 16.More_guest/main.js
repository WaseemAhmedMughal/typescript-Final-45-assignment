"use strict";
let Guest_List = ['Sir Zia Khan', 'Kamran Khan Tessori', 'Daniyal Nagori'];
// for (let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr :' + Guest_List[i] + ',\n\nIt you pleasure invit to you in our party.\n\nThank You\n\n')
// }
let absent_Guest = 'Sir Zia Khan';
let new_Guest = 'Hina Naseer';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr :' + Guest_List[i] + ',\n\nIt you pleasure invit to you in our party.\n\nThank You\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News ! we find Big Table so we are inviting 3 more guests.');
Guest_List.unshift('Amin Alam');
Guest_List.splice(2, 0, 'ABDULLAH SHEIKH');
Guest_List.push('Hani');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr :' + Guest_List[i] + ',\n\nIt you pleasure invit to you in our party.\n\nThank You\n\n');
}
