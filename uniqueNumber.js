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
//sol2
function findUniq(arr) {
  arr = arr.sort()
  if (arr[0] === arr[1]){
    return arr[arr.length -1]
  } else {
    return arr[0]
  } 
}
//sol3
function findUniq(arr) {
  return arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))
}
//sol4
function findUniq(arr) { 
  if(arr[0] == arr[arr.length-1])
  {
    return arr.filter(a => a != arr[0])[0];
  }
  else
  {
    return arr.filter(a => a != arr[1])[0];
  }
}
