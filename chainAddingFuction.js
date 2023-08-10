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
