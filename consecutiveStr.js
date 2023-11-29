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
//sol1
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  
  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}
//sol2
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
    let result = '';
    for (let i = 0; i <= strarr.length - k; i++) {
      let str = '';
      for (let j = i; j < i + k; j++) {
        str += strarr[j];
      }
      if (result.length < str.length) {
        result = str;
      }
    }
    return result;
}
//sol3
function longestConsec(strarr, k) {
  const n = strarr.length
  
  return k > 0 && strarr
    .slice(0, n-k+1)
    .map((_, i) => strarr.slice(i, i+k).join(""))
    .reduce((acc, curr) => curr.length > acc.length ? curr : acc, "") || ""
    
}
