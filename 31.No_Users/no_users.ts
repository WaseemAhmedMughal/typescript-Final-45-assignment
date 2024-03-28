// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// variable array banaya us me 5 value difinde ki.
let userName:string[] = ['Admin','Raziq','Zafar','Haris','Kashif']
// userName.lenght ko 0 index sy chack kia phr if ki condition lagai
if (userName.length === 0) {
    console.log(' We need to find some user');
}else {
//Variable ki empty difinde kar k else ki condition lagai    
userName = [] 
console.log('All user names have be removed, '+ userName.length);

}
