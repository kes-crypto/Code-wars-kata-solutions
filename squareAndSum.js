/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.
*/
function squareSum(numbers){
  ret= [];

    for (var i = 0, len = numbers.length; i < len; i++) {
        ret.push(numbers[i] * numbers[i]);
    }
  let sum = 0
  ret.forEach( num => {
  sum += num;
})

    return sum;
}
//sol1
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
