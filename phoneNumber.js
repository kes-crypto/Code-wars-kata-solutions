/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/
function createPhoneNumber(numbers) {
    let firstpart = ""
    let secondpart = ""
    let thirdpart = ""
    for (var i = 0; i < numbers.length; i++) {
        if (i < 3) {
            firstpart += numbers[i].toString()
        } else if (i >= 3 && i < 6) {
            secondpart += numbers[i].toString()
        } else if (i >= 6) {
            thirdpart += numbers[i].toString()
        }
    }
    return `(${firstpart}) ${secondpart}-${thirdpart}`
} 
//sol1
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
//sol2
 var n = numbers;
  return '('+n[0]+n[1]+n[2]+') '+n[3]+n[4]+n[5]+'-'+n[6]+n[7]+n[8]+n[9];
}
//sol3
function createPhoneNumber(numbers){
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}
