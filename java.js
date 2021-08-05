// console.log('Sanity');

function main()
{
// we call each exercise we create for the requirements
// this is the array im giving it and how many elements I want given back
// console.log(first([],))
// This was not an object literal
// Pet();


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

//==================================== End of Answer ===============================//

//EX 5 on Review 2
// Create a new empty array called pet_list. Add 3 pet objects (via object literals) to the pet_list array (each pet should have a type, age and a color property) You can choose the pets.Iterate the list of pets and print the properties for each pet.
//============== Kevin's Way ================================//
//we needed to do object literals. the basic way, not the refeactorsed for contructors way you leanered.


//=================================================== My Attempt ====================================//
// i built a constructor, this may not have been neccesary.

// I want an array called pet_list
// I want 3 objects with a type, age, and color properties
// 
//  type, age, color

//we want each thing we create to have properties and be defined
//we use this function set what property each will have
function Pet(petType, petAge, petColor) {
    // we are establishing that a pet object will have a property of petType, petAge, petColor
    // 
    this.petType = petType;
    this.petAge = petAge;
    this.petColor = petColor;

}

//im building constructors for making pet objects with 3 propeties I am setting

let pet_list = [
    new Pet('Cat', 4, 'Beige'),
    new Pet('Dog', 5, 'Brown'),
    new Pet('Cat', 2, 'White'),
];

// its asking us to print the info of each pet as an object
// console.log(pet_list);

// but you can use the DOM to get the list and have each displayed with properties by typing pet_list in the html

// i intterpreted to instructions to not having a specfic way to display them

// for (let index = 0; index < pet_list.length; index++) 
// {
//     // each time through our loop. we print a pet and its properties.
//     console.log(`${pet_list[index.petAge]}`)
// }

//==================================== End of Answer ===============================//

// #1
// Use a for loop to print 25 astericks (*).
// I will need a for loop 
// I need to print somewhere 25 *

//I can just set a tring

// let arrayAst = '*';

// // then iterate thru it 25 times, and print it
// for (let index = 0; index < 25; index++) {
//     console.log(arrayAst);
    
// }

//==================================== End of Answer ===============================//

//#2 
// Use a for loop to print numbers -10 to 5.
// I will need a for loop
// i will need to start a -10 and end at 5
// i will need it displayed
// for (let index = -10; index <= 5; index++) {
//     console.log(index);    
// }

//==================================== End of Answer ===============================//

//#3
// Use a for loop to print every 4 numbers from -50 to 50.

// for (let index = -50; index <= 50; index+=4) {
//     console.log(index);    
// }

//==================================== End of Answer ===============================//

// #4
// Use a for loop to print 0 to 5. When you get to the number 2, print "TWO". When you get to the number 4, print "FOUR".

// for (let index = 0; index < 5; index++) {
//     if (index == 2 ) {
//         console.log("Two");

//     }
//     else if (index == 4) {
//         console.log("Four");

//     }
//     else {
//     console.log(index);
//     }


//     // console.log(index);    
// }

//==================================== End of Answer ===============================//

// #5
// Prompt the user to enter a number. Create a for loop that will count from 0 to the number they entered.
// i will need a prompt input
// let num = prompt("Enter a number")

// // i need to change this string to a number
// let num1 = parseInt(num);
// // console.log(num1);

// //i will need a for loop
// for (let index = 0; index <= num1; index++) {
//     console.log(index);
    
// }

//==================================== End of Answer ===============================//

// #6 DOM
// // ### Add the following elements to the container using ONLY javascript and the DOM methods.
// ​// 1. A **div** having a class name of "content"
// // 2. The above created div should have text content of "Lets review DOM!"
// // 3. a **p** with red text that says “Hey I’m red!”
// // 4. an **h3** with blue text that says “I’m a blue h3!”
// // 5. a **div** with a black border and pink background color with the following elements inside of it:
// //   5.1. another **h1** that says “I’m in a div”
// //   5.2. a **p** that says “ME TOO!”
// //   5.3. **Hint for this one:** after creating the div with createElement, append the **h1** and **p** to it before adding it to the container.
// ========================================= End of Instructions ========================================= //

// Let saves us from using var cause we can set the let once and reuse it such as below.

// we need to target that main div element by its id below which we will be adding things to in the hardcoded HTML
// define a variable to use it with
let containerDiv = document.getElementById('container');
//  add better checking to make sure you got it. good practice only!

// First we are doing this one
// ​// 1. A **div** having a class name of "content"
// think about the parent child relationship of elements. appendchild will add this inside the parent element which is container in this case.
// this is a variable we are making to use it in DOM document interface
// imm need this to apend to elements.this is why this document . notation is imoortant
// do them one at a time
// i am crating an element. so use .create and then pick what you are making
let content = document.createElement('div');
// this is just a parent element
// add text content ass instruction asked
// 2. The above created div should have text content of "Lets review DOM!"
// using Text Node is better practice casue using .innerHTML is clunky, USE Text Node !
let contentText = document.createTextNode('Lets review DOM!');

// ! MUST DO ! add the newly made text node to the parent element
// we added the new CHild element to the content div from the contentText variable we made.
content.appendChild(contentText);

// set class attribute to content as requirment asked
// use classList and dot notate to add (.add) and add what we want in the parenthesis
content.classList.add("content");

// this puts it in the html div we set at the begining
containerDiv.appendChild(content);
// NOW Check The Console in the Browser so you can see and check it was added with this javascript. no hardcaode. but the webpage will change.


// ========================End of part==========================//

// // 3. create a paragraph element with red text content that says “Hey I’m red!”, add it to the Content div
// give it red text styling, we can do with CSS or even here, see Kevins code of how he added styling here!

// make a variable first for making all this
let pRed = document.createElement("p");

// add red text
// make a varible for the content 
let pRedContent = document.createTextNode("Hey I'm Red!!!");

// we gave the newy created p element we made and appended the child text content by putting pRedContent
pRed.appendChild(pRedContent);

// NOW ADD all this to the content div as the instruction asked
content.appendChild(pRed);

// if we had forms, we would need to essentially use event listeners and already created form tags on the html to to run when those consditions are met. refer to cookie stand. understand those also have cnstructor things going to apend to the table tags. Be Aware.
// ========================End of part==========================//

// // 4. Add an **h3** element with blue content that says “I’m a blue h3!” to the container element

// ========================End of part==========================//

// // 5. create a **div** ,that will at the end added to the main id container like we did with containerDiv.appendChild(''), element with a black border and pink background color with the following elements inside of it, This will ten be the parent of this set of child elements below, up until now we have been targeting the original parent element container:
// we will be adding child elements to the div we make 

// //   5.1. add a **h1** child element that says with text content “I’m in a div”

// //   5.2. add a **p** child element that says with text content  “ME TOO!”

// //   5.3. **Hint for this one:** after creating the div with createElement, append the **h1** and **p** to it before adding it to the container.

//POE
// main();
