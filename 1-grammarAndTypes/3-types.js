// BOOLEANS: Have two possible values - True or False -

let on = true
console.log(on);

let off = false
console.log(off);


// NULL: Empty value - Empty Container - But there is a space to fill

let empty = null;
console.log(empty);

// UNDEFINED: no value is assigned and does not act as an empty container

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

// NUMBERS : Just numbers - Integers

let degrees = 85;
console.log(degrees);

let precise = 999999999999999; //15 9s
console.log(precise);

let rounded = 9999999999999999; //16 9s
console.log(rounded);

let notquite = 0.2 + 0.1;
console.log(notquite);

let a = Number('123')
console.log(a);

// STRINGS: datatype used to represent text. Use '-----' To create string Can also use double quotes "----------"

let stringOne = 'single quotes';
let stringTwo= "double quotes";
console.log(stringOne,stringTwo);

// numbers vs strings

let first = 1050 + 100;
console.log(first);

let second = '1050' + '100';
console.log(second); //Concatenated string - Added together as strings, not as math.

// OBJECTS: objects are used to store many values instead of a singular value
// Objects hold key/value pairs
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true,
}

console.log(frodo);
console.log(typeof frodo);

//Arrays: Holds a list of items - Container of items

let burritos = [
    'large', 4, true
];
console.log(burritos);
console.log(typeof burritos);

// addition and concatentation 
let third = 1050 + '100';
console.log(third);
console.log(typeof third);

//String Properties
    // properties are qualities associated with a datatype
    // strings and numbers both have qualities associated with them, and their own properties

let myName='Brad';
console.log(myName.length); //only time javascript doesnt start counting from 0

// String Methods : methods are tools that help us manipulate our data
    // .Properties use '.' methods use .Methods()'

let myNameIs = 'Brad';
console.log(myNameIs.toUpperCase());

let home = 'my home is greenwood';
console.log(home.includes('greenwood'))

// Challenge 

let sent ='this sentence will be split into individual parts';
console.log(sent.split(''));



// var sent = str.split('this sentence will be split into individual parts'');
// console.log(sent[3]);



