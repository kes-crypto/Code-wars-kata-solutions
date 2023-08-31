//my soln
function findNeedle(haystack) {
  const needle = haystack.indexOf("needle") 
  return "found the needle at position " + needle
}

//sol
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}

//sol
let findNeedle = lst => 'found the needle at position ' + lst.indexOf('needle');
