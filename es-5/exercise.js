// Create the variables here

let isDoorClosed = true,
  isDogOutside = false;

// Don't modify this block. This is an if statement, you'll study it later in this course.
if (isDoorClosed == true && isDogOutside == false) {
  console.log("the door is closed and the dog is inside");
} else if (isDoorClosed == false && isDogOutside == true) {
  console.log("The door is open and the dog is outside");
} else console.log("Modify the variables values");


/*
  What's happening is, if the variable 'isDoorClosed' is set to true and
  'isDogOutside' is set to false, the both conditions are true and the 'if'
  statement will be satisfied which will print 'The door is closed and the
  dog is inside'. If the values are inverted the both conditions will also
  be true and 'else if' will be satisfied which will print the 'the door is
  open and the dog is outside'. if none of the conditions are satisfied,
  the 'else' statement will print 'Modify the variables values'
*/
