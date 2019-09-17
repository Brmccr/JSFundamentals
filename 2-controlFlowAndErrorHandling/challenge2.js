// let name = 'ZACH';

// if(name == name.toUpperCase()){
//     console.log(name.slice(1))
// } else {
//     console.log('hey, this isnt written correctly')
// }


// let name = 'zAchARy';

// if(name[0] == name[0].toUpperCase()){
//     console.log(name);
// } else {
//     console.log(name.toLowerCase()) //s.charAt(z)
// }

// let name = 'zAchARy';

// if(name == name.toUpperCase()){
//     console.log(name.slice(1))
// } else {
//     console.log('hey, this isnt written correctly')
// }


// let name = 'zAchARy';

// if(name[0] == name[0].toUpperCase()){
//     console.log(name);
// } else {
//     console.log(name.slice(1).toLowerCase()) //s.charAt(z)
// }

//slice method -- () Extracts parts of a string and returns the extracted parts in a new string

let name = 'zAchARy';

if(name[0] == name[0].toUpperCase()){
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log('console.log #1', isUppercase);
} else {
    let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console.log #2;', notUppercase); //s.charAt(z)
}

//  ELSE IF






