// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
//  message that reads I love TypeScript. 
//  Make a large shirt and a medium shirt with the default message,
//   and a shirt of any size with a different message.

// call the function
function make_shirt(size:string = 'Large', text:string = 'I Love TypeScript'){
    console.log(`Creating a ${size} Shirt with the message`);

}
//print the large shirt
make_shirt();
//print the default size with massege.
make_shirt('medium');
//print the default size and different massege.
make_shirt('small','I Love Python');
