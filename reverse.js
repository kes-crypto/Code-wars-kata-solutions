
function solution(str){
  return str.split('').reverse().join('');  
}
//sol1
function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
//sol2
let solution = str => [...str].reverse().join('');
