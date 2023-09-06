/*DESCRIPTION:
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

//sol1
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
//sol2
function rowSumOddNumbers(n) {
	return n*n*n
}
//sol3
let rowSumOddNumbers = n => n ** 3;
//sol4
function rowSumOddNumbers(n) {
	var start = n * n - n + 1;
  var result = 0;  
  
  for(i = 0; i < n; i++)
  {
    result =  result + (start + (i*2));
  }
    
   return result;
}

//sol5
function rowSumOddNumbers(n) {
	// TODO
  return n > 0 ? n * n * n : "Wrong Input"
}
