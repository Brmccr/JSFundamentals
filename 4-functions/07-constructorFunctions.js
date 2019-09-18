let person1 ={
    name : 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Jeremy'
    age: 15;
    canVote; false
}

let person3 = {
    name: 'Tyler'
    age: 38;
    canVote: true
}
// (1)     (2)        (3)
function Person(name, age, canVote) {
//  (4)   (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//             (7)   (8)
let person4 = new Person('Brad', 26, true);


/*
    1.javascript keyword
    2. function name - For constructor functions, the name should be capaitalized
    3. parameters. These will be the values of the object once we call the function
    4. the 'this' keyword gives us the ability to refer back to whatever called or activated it. In this case 
    refers to our function 'Person'
    5. this will be the key of the new object we create. This is NOT referring to the parameter
    6. this IS referring to the parameter we pass through our constuctor function
    7 & 8 - the new keyword is calling our person constructor function - creating new person with values using an argument
    
*/