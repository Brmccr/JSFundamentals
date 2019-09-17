// act as a shortcut for writing if/else or switch statements 

let num = 6;

// ternary -- Short hand for writing if/else statements

(num > 0) ? console.log('yes it is') : console.log('no it isnt');
// (1)   (2)                        (3)

/*

    1. parens act as our if. checks if the statement evaluates as true
    2. if the statement is true, run what's after the question mark
    3. colan acts as our 'else' or catch all statement

*/

if (num > 0){
    console.log('yes it is')
} else {
    console.log('no it isnt')
}

let num2 = 6; 

(num2 == 0) ? console.log('Hello') : (num2<0) ? console.log('hi') : console.log('goodbye')
