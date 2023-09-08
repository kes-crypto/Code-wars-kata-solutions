/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
function descendingOrder(n){
   let b = Array.from(n.toString()).map(Number); // map int into array
    let stringResult = b.sort().reverse().join(""); // sort in ascending, then reverse & join
    let intResult = ~~stringResult; // double bitwise operator to turn str to int
    return intResult; // return final int
}
//sol2
const descendingOrder = (a) => ~~Array.from(a.toString()).sort().reverse().join("");
//sol3
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
//sol4
function descendingOrder(n) {
  return +n.toString().split('').sort().reverse().join('');
}
//sol5
function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}
