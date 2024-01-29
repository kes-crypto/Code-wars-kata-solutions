function fakeBin(x){
let output = "";
  for (let i=0; i<x.length; i+=1) {
    if (x[i] < 5) {
      output += 0;
      } else { output += 1; }
    }
    return output;
}
