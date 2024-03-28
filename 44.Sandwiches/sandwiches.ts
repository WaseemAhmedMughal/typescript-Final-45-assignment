// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
// should have one parameter that collects 
// as many items as the function call provides, and it should print a summary of the sandwich that 
// is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(item:string[]) {
    console.log('\nMaking your sandwich with!');
    
  item.forEach(element => console.log("_ " + element));

   console.log('Enjoy the sandwich!\n');

}  


make_sandwich(['Chesse','Bred','EEg','Kechtup']);
make_sandwich(['mayo','sucec','black paper',]);
make_sandwich(['Penut Butter','Jelly','Cream']);
make_sandwich(['Turky','Pakistani','Chainse']);

