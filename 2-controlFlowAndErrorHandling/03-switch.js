/*
    - switch statements execute a block of code depending on different cases
    - switch statements are often used together with break of default keywords
        - break keyword breaks out of the switch block alltogether
        - default keywords specifies code to run if there is no case match
*/

let officeCharacter ='Jim';

switch (officeCharacter) {
    case 'Michael':
        console.log('My mind is going a mile an hour');
        break; 
    case 'Dwight':
        console.log('I am fast. To give you a reference point Im somewhere between a snake and a mongoose... And a panther')
        break;
    case 'Jim':
        console.log('Bears. Beets. Battlestar Galactica');
        break;
    default:
        console.log(`Im sorry, ${officeCharacter}, but do I know you?`)
        //backticks are used for string interpolation
}

let num =-5;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work')
}


