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
//sol6
function rowSumOddNumbers(n) {
  var result = 0;
  
  for (var i = 0; i < n; i++) {
    result += n * n - n + 2 * i + 1;
  }

  return result;
}
//sol7
function rowSumOddNumbers(n) {return n**2*n}
//sol8
function rowSumOddNumbers(n) {
	const startNum = n * (n-1) + 1;
    const rowArr = [startNum];

		
    for (let i = 0; i < n - 1; i++) {
			rowArr.push(rowArr[i] + 2);      
    }

		var sum = rowArr.reduce(function(a, b){
			return a + b;
		}, 0);

    return sum;
}
