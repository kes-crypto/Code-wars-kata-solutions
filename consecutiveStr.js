
function longestConsec(strarr, k) {
  let arrLength = strarr.length;
  let arr = [];
  
  if(arrLength == 0 || k > arrLength || k <= 0) return "";
    
  for(let i = 0; i <= arrLength - k; i++){
    let current = strarr[i];
    for(let ii = k, jj = 1; ii > 1; ii--, jj++){
      current += strarr[i+jj]
    }
  arr.push(current);
  }
 return arr.reduce(function (a, b) {
        return a.length > b.length ? a : a.length == b.length ? a : b;
    });
}
