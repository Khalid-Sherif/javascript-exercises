let sport = " Basketball";
function canPlay() {
  let sport = " Football";
  let personName = "Cosimo";

  // if (true) {
  //   let personName = "Cosimo";
  // }

  console.log(personName + sport);
}

canPlay();

/*
if statement block can only hold its defined variables locally and can't be
called from the outside of its scope.
Aside from if statement, when assigning sport as a variable both globally and
locally inside the function, the function will first check the closest or
the first one that is defined between identical variables. If the there are
identical variables defined locally inside the function as well as globally,
the function will pick the local variable and override the value of the global
one inside it only and not outside. If, "var" is used to define the variables,
locally and globally with the same name, the global variable will be overwritten.
*/
