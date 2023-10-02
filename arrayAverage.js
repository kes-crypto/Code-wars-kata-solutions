/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function findAverage(array) {
  // create a variable for the sum and initialize it
  let sum = 0;
  
  // iterate over each item in the array
for (let i = 0; i < array.length; i++ ) {
  sum += array[i];
}
if (array.length>0){
  return sum/array.length
}
  else
  return 0;
}
