function isTriangle(a, b, c) {
  return (a + b > c) && (a + c > b) && (b + c > a);
}
//sol1
function isTriangle(a,b,c) {
  var sides = [a, b, c].sort();
  return (sides[0] + sides[1] > sides[2]);
}
//sol2
function isTriangle(a,b,c)
{
    return Math.min(a+b,a+c,b+c) > Math.max(a,b,c) ? true:false
  
}
//sol3
function isTriangle(a,b,c){
   let sides = [a, b, c].sort((a,b) => a - b)
   return (sides[0] + sides[1]) > sides[2]
}
