// Loops offer us a quick and easy way to do something repeatedly, or loop over something

// Note: There is a danger of infinite loops. 

/*
 -for loops take in 3 parameters
    1. Initial expression
    2. Condition
    3. increment expression
*/

//       (1)      (2)  (3)
// for (let i = 0; i < 10; i++) {
//     console.log(i);s
// }

// 1 initial expression 2 Condition to be more 3 incremental expression

//challenge

// for (let i= 0; i <= 20; i+=2) {
//     console.log(i);
// }

// for (let i =10; i >= 0; i-=1) {
//     console.log(i)
// }

//challenge

// for (let i= 0; i >=-24; i-=2) {
//     console.log(i);
// }

//challenge 

// let name = 'Donovan'; 


// for(let name = 0; name < name.length; name++) {
//     console.log(str[name]);
//   }

// let name = 'Donovan'

// // for (let i = 0; i < name.length; i++) {
// //     console.info(name[i]);
// //   }

// for (let n of name) {
//     console.log(n);
// }

// Challenge

// for (let i = 0; i <= 50; i++) {
//     console.log(totalSum[i]);
// }


let sum = 0;

for(let i = 1; i <= 50; i++) {
    sum += i; // sum = sum + i
}

console.log(sum);


