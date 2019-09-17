let name = 'Brad';
console.log(name);
// let name = 'Brad'; //Will give an error if this is after console log- Not initialized

b();

function b() {
    console.log('I have been hoisted');
}

//Hoisting allows the code to run - Reaches back for information
