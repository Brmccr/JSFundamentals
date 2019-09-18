// arrow functions (or fat arrow functions) were introduced in ES6. They are a more concise way to write function 
// expressions - Not function declaractions
    // That means that arrow functions do not get hoisted

// BLOCK BODY ARROW FUNCTION - Must have a return inside of them
let hi = () => {
    console.log('hi');
    //return --- block body arrow functions must have a return in the body of the function
}

hi();

// Concise body arrow functions
let hi = () => console.log('hi')
    //concise body arrow functions return by default
hi();


// concise vs block


let apples = x => console.log(`There are ${x} apples.`);

apples(10);

let apples = x => {
    console.log(`There are ${x} apples.`)
}

apples(15);

