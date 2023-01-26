let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

hello = Number(hello);
age = Boolean(age);
isGraduated = String(isGraduated);

console.log(hello);
console.log(age);
console.log(isGraduated);

// The output of hello is 'NaN', because the value of hello is not considered a number.
