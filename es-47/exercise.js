const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers[0]);
console.log(numbers[9]);
console.log(numbers.length);

console.log(numbers[20]);
/*
Anything that is after element 9 does not exist
which is considered undefined. If we add a value
at element 30 for example, we will have almost
20 empty unfilled elements, and when we call any
of these unfilled elements we will get back undefined
*/
