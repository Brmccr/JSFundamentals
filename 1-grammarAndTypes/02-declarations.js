// variables are named containers for storing data values
// name them so we can refer back to them later

let a = 2;
/* (1) (2) (3) (4) 

1- variable javascript keyword -- let
2- variable name -- currently a
3- assignment operator - equals 
4- value - currently 2
*/

// Numbers cannot be starting value in the case of a

let hello;
let Hello; //These are two different variables due to the capitalization

let myName; //example of camel casing - Lower case for first word and then uppercase for all following
let myNameIsBrad; //second example of camel casing

/*
    var, let, const: (Examples of Javascript variables)

    -var : old keyword for variables. Won't be used as often
    -let: newer keyword for variables. introduced in es6.
    -const: newer keyword - Declares unchangable variable - Introduced in es6. 
*/

// Declaration: left side of the variable
// initialization: right side of the variable

let x;
console.log('Declaration', x) //declaration

x = 10;
console.log('Initialization', x); //initialization

x=33;
console.log('Reinitialization', x);


/////////////////////////////////////////////////

let today = 'Great!';
const elevenFifty = 'Wonderful!';

console.log(today, elevenFifty);

today = 'Lovely';
console.log(today, elevenFifty);

// elevenFifty = 'Super!';
// console.log(today, elevenFifty); -- Will give you an error as you can't assign a new value to const

