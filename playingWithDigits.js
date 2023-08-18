/*
DESCRIPTION:
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/
//sol 1
function digPow(n, p){
  var ans = n.toString().split('')
             .map((v,i) => Math.pow(parseInt(v), i+p))
             .reduce((a,b) => a+b) / n;
  return ans%1 == 0 ? ans : -1;
}
//sol 2
function digPow(n, p){
  // ...
  var num1=n.toString();
  var num2=p.toString();
  var sum=0;
  
  for(var i=0;i<num1.length;i++){
    sum=sum+Math.pow(parseInt(num1.charAt(i)),p);
    p++;
    if(sum%n==0){return sum/n;}
  }
  return -1;
  
  
}
//sol 3
function digPow(n, p){
  var str = String(n);
  var sum = 0;
  for(var i=0 ; i< str.length ; i++){
    sum += Math.pow(str[i], p+i);
  }
  
  if(sum%n == 0){
     return sum/n;
  }
  return -1;
}
//sol 4
function digPow(n, p){
  if(n <= 0 || !p) return -1;
  var total = 0,
      numstr = ""+n,
      tmp;
  
  for(var i=0; i<numstr.length; i++) {
    total += Math.pow(numstr[i], p++);
  }
  
  return (total/n)%1===0 ? total/n : -1;
}
//sol 5
function digPow(n, p){
	var s = 0;
  
  n.toString().split("").map(function (i) {
  	s += Math.pow(i, p);
    p++;
  });
  
  return (s % n == 0) ? (s / n) : -1;
}
//sol 6
function digPow(n, p){
  var output=0;
  var x = n.toString(); 
  for (var i = 0,len = x.length;i< len; i += 1) {
   output = output + Math.pow(+x[i], p+i);       
  }
  var k = output/n;  
  return Number.isInteger(k) ? k : -1;
}
//sol 7
function digPow(n, p) {
  var summary = (n + '').split('').reduce(function(accumulator, currentValue) {
    return accumulator + Math.pow(currentValue, p++); 
  }, 0);
 
  return summary === n ? 1 : !(summary % n) ? summary / n : -1;
}
//sol 8
function digPow(n, p){
  var sum = n.toString().split('').reduce(function(res, d, i){
    return res + Math.pow(d, (p+i));
  }, 0);
  if(sum === n) return 1;
  if(sum % n !== 0) return -1;
  
  return sum/n;
}
//sol 9
function digPow(n, p){
  var arr = n.toString().split('')
  var count = 0
  for (var i = 0;i<arr.length;i++){
    count += Math.pow(arr[i],p+i)
  }
    if(count/n%1 !==0){
      return -1
    }
    else{
      return count/n
    }
}
//sol 10
function digPow(n, p){
  var digits = n.toString().split('');
  var reduced = digits.reduce(function(sum,digit, i){
    digit = +digit; // convert from char to number
    return sum += Math.pow(digit,p+i);
  },0);
  
  if(reduced % n === 0) return (reduced / n);
  else return -1
  
}
