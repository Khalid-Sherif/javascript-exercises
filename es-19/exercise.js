let name; // undefined, falsy variable
let surname = 'Rossi';

if (name && surname) {
    console.log(name + " " + surname);

} else {
    console.log("Full name is invalid");
}

name = "Mario" // a defined string, truthy variable

if (name && surname) {
    console.log(name + " " + surname);

} else {
    console.log("Full name is invalid");
}
