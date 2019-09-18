// loop over iterable properties
    //iterable meaning able to parse through with numbers  

// we cannot use a for of loop with an object because objects do not have indexes or iterable properties
// objects are enumerable
// let student = {
//     name: 'Peter',
//     awesome: true,
//     degree: 'Javascript',
//     week: 1
// };

// for (let item of student) {
//     // console.log(item);
//     console.log(student[item])
// }

let dogArray = ['husky', 'german shephard', 'pug', 'border collie', 'chihauhua']

for (dog of dogArray) {
    console.log(dog, 'goes bark');
}

// for of are for arrays
// for in are for objects