/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
function towerBuilder(nFloors) {
  var finalArray = [];
  var numSpaces = 0;
  // Start from the reverse.
  for (i = nFloors; i > 0; i--) {
    // At the end, the number of spaces are 0.
    // Have one and less for the half of the stars.
    // Add another set of spaces.
    finalArray.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)  + " ".repeat(numSpaces));
    // Increment the space, while going to top.
    numSpaces++;
  }
  // Reverse the array.
  return finalArray.reverse();
}
//sol1
function towerBuilder(nFloors) {
  var result = [];
  var starNumber = 1;
  for (i=1; i<=nFloors; i++) {
    result[i-1] = " ".repeat(nFloors-i) + "*".repeat(starNumber) + " ".repeat(nFloors-i);
    starNumber += 2;
  }
  return result;
}
