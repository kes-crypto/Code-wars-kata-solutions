I'm editing this/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
//my soln
function arrayDiff(a, b) {
const filteredArray = a.filter(function(x) { 
  return b.indexOf(x) < 0});
  return filteredArray
}
//soln1
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
//soln2
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

//read this

function arrayDiff(a, b) {
   // Loop for array1
    for (let i = 0; i < a.length; i++) {
 
        // Loop for array2
        for (let j = 0; j < b.length; j++) {
 
            // Compare the element of each and
            // every element from both of the
            // arrays
            if (a[i] === b[j]) {
 
                // Return if common element found
                return true;
            }
        }
    }
 
    // Return if no common element exist
    return false;
}
