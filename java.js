// console.log('Sanity');

function main()
{
// we call each exercise we create for the requirements
// this is the array im giving it and how many elements I want given back
console.log(first([1,2,3,5,6,7,8,9,10],8))

}

// EX 3 on Review 2
// Write a JavaScript function called first() to get the first n element(s) of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// we will need a function called first
// i will need an array
// i will need to iterate thru that array with a for loop


// we set the parameters here
// the second param is what we want from the new array we are ushing into after iteration
function first(theArray,numOfElem) {
    // lets check to see if the number entered is more than the array
    if (numOfElem > theArray.length){

        return `You asked for ${numOfElem} elements, but the array passed only has ${theArray} elements!`;
    }

    // I need to get the first number of elements for the number passed in as the second parameter
    // I set this new empty array for what we input to go into from this for loop
    // we .push from the result of the follwoing for loop to fill this array
    let resultArray = [];
    // i will need to iterate thru the first array
    for (let index = 0; index < numOfElem ; index++) {
        // push what we asked for into the new array to be displayed.
        resultArray.push(theArray[index]);
        
    } 
    // return the new array with the elements we wanted displayed
    // this is how we displayed our data we sent into result array.the new one we made.
    // dont think of it to complicated. these are things we've done 
    return resultArray;

}

//EX 5 on Review 2
// Create a new empty array called pet_list. Add 3 pet objects (via object literals) to the pet_list array (each pet should have a type, age and a color property) You can choose the pets.Iterate the list of pets and print the properties for each pet.


// I want an array called pet_list
// I want 3 objects with a type, age, and color properties
// 
//  type, age, color

//we want each thing we create to have properties and be defined
//we use this function set what property each will have
function Pet(petType, petAge, petColor) {
    //
    //these  attr keep everything in this function and object
    //these are the attributes that we've already made
    this.petType = petType;
    this.petAge = petAge;
    this.petColor = petColor;

}

let pet_list = [
    new Pet('Cat', 4, 'Beige'),
    new Pet('Dog', 5, 'Brown'),
    new Pet('Cat', 2, 'White'),
];

console.log(pet_list);


// for (let index = 0; index < pet_list.length; index++) {
// }
// return pet_list;



//POE
main();
Pet();