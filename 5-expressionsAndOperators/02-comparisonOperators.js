// EQUAL
'3' == 3;
console.log('3' == 3); //equal but not absolute equal

// JavaScript is helpful and does something known as coercion when comparing values
// coercion is the process of converting a value from one datatype to another

// STRICT EQUAL - this overrides javascript coercion
3 === 3; // Overrides since it is a strict equal == equal === strict equal
console.log('3' === 3);

//Not equal
console.log('3' != 3);

// Strict not equal
'3' !== 4;

//greater
3 > 2;

//less than
2 < 3;

//greater than or equal to
3 >= 2; // not to be confused with => (fat arrow functions) carrot goes before

// less than or equal to
2 <= 3;

// AND -- Checks for multiple values
2 && 3

// OR - Checks for either/or
2 || 3