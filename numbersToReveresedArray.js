/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

//sol 1
function digitize(n) {
const arrayOfDigits = String(n) .split('') .map(Number)
  const reversed = arrayOfDigits.reverse();
  return reversed
}
//sol 2
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
//sol 3
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
