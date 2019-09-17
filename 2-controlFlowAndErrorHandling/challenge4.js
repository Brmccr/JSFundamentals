let dessert ='Nyeh';

switch (dessert) {
    case 'Pie':
        console.log('Pie, pie, me oh my!');
        break; 
    case 'Cake':
        console.log('Cake is great!')
        break;
    case 'Ice Cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(`${dessert} Not on the menu`)
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