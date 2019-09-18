let hi =() => {
// (1)
    return 'hi';
}
//    (2)       (3)
let greeting = hi();

console.log(greeting);

/*
    1.keyword that brings data from inside the local scope of the function outside
    2. declare a new variable to hold the value of the return
    3. when called or 'invoked', the function return becomes the value of our variable 'greeting'

*/

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
            } else {
                capName += name[l].toLowerCase();
            }
    }
    console.log(capName);
    return capName;
}

const myName = capitalizeName('zAcHArY')
const jessicaName = capitalizeName('jeSSiCa')
console.log(myName + ',how are you doing today?')
console.log(`${jessicaName}, how are you doing today?`)