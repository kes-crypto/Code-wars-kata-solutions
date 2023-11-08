/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
var countBits = function(n) {
   // make an array with the bit result
   const base = (n).toString(2).split('');
   
   // make a sum with the array and make the index a Number
   const result = base.reduce((sum, num) => sum + Number(num), 0);
   
   return result;
};
//sol1
countBits = n => n.toString(2).split('0').join('').length;
//sol2
var countBits = function(n) {
  return n.toString(2).split('0').join("").length;
};
countBits(0);

/* here the
1. n.toString(2) method converts n into a binary string.
2. split('0') makes array out of the binary string splitting only at 0's
 and hence returning an array of only 1 present in binary of n.
3. join('') joins all one and making a string of 1's.
4. length finds length of the string actually counting number of 1's in n.
*/
