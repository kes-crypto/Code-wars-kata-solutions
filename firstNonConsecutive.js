/*
DESCRIPTION:
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
*/
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}
//sol1
const firstNonConsecutive = array =>
  (val => val % 1 === 0 ? val : null)
  (array.find((val, idx) => val !== array[0] + idx));
//sol2
function firstNonConsecutive (arr) {
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i]-arr[0]) !== i) {
      return arr[i]
    }
  }
  return null
}
//sol3
function firstNonConsecutive (arr) {
  // initial value 
  // 1 2 3 4
  let previousNum = arr[0]
  // store first non consec
  let first;
  // if prevNum is not equal to next num in arr
  // 2 3 4 6
  for(let i = 1; i < arr.length; i++) {
    if(previousNum + 1 !== arr[i]) {
      // the non consec number gets stored here and end program or else it will look at next num in arr
      first = arr[i]
      break;
    }
    previousNum++
  }
  // return first non consec number not equal to undefined or first is null
  return first !== undefined ? first : null
}
//sol4
function firstNonConsecutive (arr) {
  var length = arr.length; //get length
  var val = arr[0]; //base comparison value variable
  for(var i = 1; i < length; i++) { //comparison
    if(arr[i] != val + 1) {
      return arr[i];
    }
    val++;
  }
  return null; //default return
}
//sol5
function firstNonConsecutive (arr) {
  return arr.reduce((acc, n, i, src) => {
    if(n !== src[i-1] + 1 && !acc && i !=0) return n;
    return acc;
  }, null);
}
