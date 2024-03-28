
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or
//  a car, and make a list that stores several examples. Use your list to print a series 
// of statements about these items, such as “I would like to own a Honda motorcycle.”

//create a list of in array
let transportion :string[] = ['Cycle','Motorbike','Car','Raksha','Bus','Coch','Train','Plain',]

//loop ka function laga kar 0 index sy message k sath print karwaya .

for(let i=0; i<transportion.length; i++){
    console.log('I would like to own a :' + transportion[i]) ;
}