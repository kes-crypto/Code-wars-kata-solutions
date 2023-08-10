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

