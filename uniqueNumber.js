/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

//Failed attempt, eliminated duplicate elements
function findUniq(arr) {
  const array = new Set(arr)
  const unique = [...array]
  return unique
}

//sol1
const findUniq = (list, sorted = [...list].sort()) => 
   sorted.find(
     (item, index) => 
        item !== sorted?.[index + 1] 
        && item !== sorted?.[index - 1]
   );
