/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

function narcissistic(value) {
 
    let valString = value.toString().split('');
 
    let integerSet = valString.map((item)=>{
     return Number(item);
    })
   
    let keyFunc = function powerCalc(test){
      let a = test.length;  // <------- "raised to the power of the number of digits"
      return test.map((item)=>{
        return Math.pow(item, a);
      }).reduce((total, item)=>{
        return total + item;
      }, 0);
    }

    // console.log(keyFunc(153)); // <-- This was throwing an error

    if(keyFunc(integerSet)==value){
       return true;
     }
    else {
       return false;
     }
}
//sol1
function narcissistic(value) {
  return value.toString()
              .split('')
              .map( (x,i,arr) => x ** arr.length)
              .reduce( (a,b)=> +a + +b) 
               === value
}
