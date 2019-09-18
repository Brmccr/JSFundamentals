// great for iterating over values in an object. Properties in an object are whats called 'enumarable'

//for in loops iterate over an objects enumerable properties

// let student = {
//     name: 'Peter',
//     awesome: true,
//     degree: 'Javascript',
//     week: 1
// };

// for (let item in student) {
//     // console.log(item);
//     console.log(student[item])
// }


// let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

// for (cat in catArray) {
//     // console.log(cat);
//     console.log(catArray[cat]);
// }

// For in loops for objects

// For in loops for array - Second example

//challenge

// let name = 'doNoVan';

// for (n in name) {
//     // console.log(name.charAt(0).toUpperCase);
//     console.log (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// }

let name ='doNoVan';
let capName;

for (let n in name){
    if (n == 0) {
        capName = name[n].toUpperCase();
    } else {
        capName += name[n].toLowerCase();
    }
}

console.log(capName);





