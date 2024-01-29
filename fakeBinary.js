function fakeBin(x){
let output = "";
  for (let i=0; i<x.length; i+=1) {
    if (x[i] < 5) {
      output += 0;
      } else { output += 1; }
    }
    return output;
}

sol1
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
sol2
function fakeBin(x){
  return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}
