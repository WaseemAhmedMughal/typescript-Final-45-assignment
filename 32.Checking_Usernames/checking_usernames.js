"use strict";
let currentUser = ['waseEEM', 'FaHeeM', 'UsAmA', 'mUsHtAQ', 'UMaR'];
let newUser = ['ahmed', 'afzal', 'waseEEM', 'miraj', 'FaHeeM'];
newUser.forEach(newUserName => {
    let lowerCase = newUserName.toLowerCase();
    if (currentUser.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUserName} is not available. please write a difrent username`);
    }
    else {
        console.log(` The username ${newUserName} is available.`);
    }
});
