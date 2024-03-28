"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need 
// to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program
//  stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new
//  person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Create a guest list in array
let Guest_List = ['Sir Zia Khan', 'Kamran Khan Tessori', 'Daniyal Nagori'];
// Print the message to each person in the list with the message
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr :' + Guest_List[i] + ',\n\nIt you pleasure invit to you in our party.\n\nThank You\n\n');
}
// create a new absent guest variable
let absent_Guest = 'Sir Zia Khan';
// create a new new guest variable
let new_Guest = 'Hina Naseer';
// 0 index par new guest variable store kia 
Guest_List[0] = new_Guest;
// loop ki madad sy guest list print kia one by one 
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr :' + Guest_List[i] + ',\n\nIt you pleasure invit to you in our party.\n\nThank You\n\n');
}
//absent guest list print kia with message
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
