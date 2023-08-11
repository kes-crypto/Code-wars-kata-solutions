/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
//sol 1
function solution(str, ending){
  var a = str.slice(-3);
  var b = ending;
  if (a === b){
    return true;
  }
  
  else
    return false;
}
//soln 2
function solution(str, ending){
  return str.split('').filter((_, i) => i >= str.length - ending.length).join('') == ending ? true : false;
}
//soln 3
function solution(str, ending){
  return str.endsWith(ending);
}
//sol 4
function solution(str, ending){
  if (typeof(str) != "string" || typeof(ending) != "string")
    throw "wrong type";
  if (ending.length>str.length)
    return false;
  return str.substr(str.length-ending.length, ending.length) == ending;
}
