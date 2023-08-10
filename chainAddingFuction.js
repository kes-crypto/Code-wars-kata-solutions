/*
DESCRIPTION:
We want to create a function that will add numbers together when called in succession.

add(1)(2); // == 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
and so on.

A single call should be equal to the number passed in.

add(1); // == 1
We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
We can assume any number being passed in will be valid whole number.
*/

//soln 1
function add(n){
  var fn = function(x) {
    return add(n + x);
  };
  
  fn.valueOf = function() {
    return n;
  };
  
  return fn;
}

//soln 2
var add = function(n) {
  const f = x => add(n + x)
  f.valueOf = () => n
  return f;
}
//sol 3
function add(n){
  var a = function(x){ return add(x + n) }
  a.valueOf = function(){ return n }
  return a
}
//sol 4
function add(n){
  var fn = function(x) {
    return add(n + x);
  };
  
  fn.valueOf = function() {
    return n;
  };
  
  return fn;
}
//sol 5
function add(n){
  var fn = function(x){ return add(n+x); }
  fn.toString = function(){ return n; }
  return fn;
}
//sol 6
function add(n){
  
  var sum = n;
  
  var f = function(n) {
    sum += n;
    return f;
  };
  
  f.valueOf = function() {
    return sum;
  }

  return f;
}
