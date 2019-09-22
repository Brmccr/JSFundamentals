function brad(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

// brad('cheeze pizza');

// function parameters are place holders for data that we pass into the function when calling or 'invoking' the function

// functions need parameters to be able to accept data that we pass to them

// function Name(Firstname)(Lastname){
//     let y = (`${Firstname} + ${Lastname}`);
//     console.log('Hello, my name is' + Name)
// }

// Name();

function Name(Firstname, Lastname){
    let y = (`${Firstname} ${Lastname}`);
    console.log(`Hello, my name is ${y}`)
}

Name('Brad','McCracken');