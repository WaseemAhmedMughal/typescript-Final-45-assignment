// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person 
// will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// create a array of store value
let currentUser: string[] = ['waseEEM','FaHeeM','UsAmA','mUsHtAQ','UMaR'];
// second array store a new value
let newUser: string[] = ['ahmed','afzal','waseEEM','miraj','FaHeeM'];
// for each ka function laga kar lower case par if else ki condition laga kar call ki
newUser.forEach(newUserName =>{
    let lowerCase:string = newUserName.toLowerCase();
    if (currentUser.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
    console.log(`The username ${newUserName} is not available. please write a difrent username`);
        
    }else{
        console.log(` The username ${newUserName} is available.`);
        
    }
    
})