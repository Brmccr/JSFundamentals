// function hi () {
//     console.log('HI');
//     return 'hi';
// }

// hi; // Will log nothing

// hi(); //Need to call function name and include ();

// console.log(hi); // [function: hi] -- Logs the function itself

// console.log(hi());

/*
    -The parentheses after a function IMMEDIATELY invoke the function that's being called
    -we get undefined if we are not returning information from our function ----- return 'hi';
*/

//challenge


function list () {
    for (num= 0; num <11; num++){
        console.log(num);
    }

// }

// list();

let arr = ['This', 'is', 'really', 'cool'];


function list () {
for (num of arr) {
    console.log(num);
    }
}

list();
