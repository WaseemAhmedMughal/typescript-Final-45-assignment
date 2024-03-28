"use strict";
function make_sandwich(item) {
    console.log('\nMaking your sandwich with!');
    item.forEach(element => console.log("_ " + element));
    console.log('Enjoy the sandwich!\n');
}
make_sandwich(['Chesse', 'Bred', 'EEg', 'Kechtup']);
make_sandwich(['mayo', 'sucec', 'black paper',]);
make_sandwich(['Penut Butter', 'Jelly', 'Cream']);
make_sandwich(['Turky', 'Pakistani', 'Chainse']);
