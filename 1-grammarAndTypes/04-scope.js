// scope is how a computer keeps track of all the variables in a program
// there is local and global scopes -- Global the world - Local -- Indiana

// let x = 12;

// function scope() {
//     let x = 33;
//     console.log (x);
// }

// scope();
// console.log(x);

// let y = 12;

// function scope() {
//     y = 33;
//     console.log(y);
// }

// scope()
// console.log(y);

// var vs let
// var not often used to due issue
//var is scopes to nearest function block - Which can cause issues
//let is scopes to 

// var x = 12;

// function varTest () {
//     var x = 33;
//     if (1 == 1) {
//         var x = 45;
//         console.log(x);
//     }
//     console.log(x);
// }

// varTest();
// console.log(x);

//let example

let x = 12;

// function letTest() {
//     var x = 33;
//     if (true) {
//         let x =45; //Let is scopes here for the first log
//         console.log(x); //Scoped here for second
//     }
//     console.log(x); //Scopes here for third
// }

// letTest();
// console.log(x); //reason why is let is scopes to the nearest closing brackets

//const example

function constTest() { //Scoped to the nearest enclosing block
    const scope =1; 
    // const scope = 2; Would give you an error as you can't redefine a constant
    if (true) {
        const scope =2;
        console.log(scope);
    }
    console.log(scope);
}

constTest();

//Use let over var due to issues with that scope



