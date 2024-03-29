"use strict";
let PersonName = '';
PersonName = prompt('what your name ?') || '';
if (PersonName !== null && PersonName !== '') {
    alert(`hello $ {PersonName},would you like to learn same python today?`);
}
else {
    alert('you have to fill your name');
}
