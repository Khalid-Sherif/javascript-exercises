const user = {
  name: "Cosimo",
  age: 30,
};


let newUser = {};

for (let i in user) {
  newUser[i] = user[i];
}

newUser.name = "Paolo";
// newUser.age = 45;

console.log(newUser);
console.log(user);

/*
By setting "newUser" as an empty object and copying all the keys
and values from the "user" object, we then set "newUser" as
clone of the "user" object but separate, which gives us the
ability to overwrite the values of "newUser" without affecting
"user"
*/
