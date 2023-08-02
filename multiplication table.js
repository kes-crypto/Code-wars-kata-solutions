/* 
Your task is to create an N×N multiplication table, of the size provided in the parameter.
For example, when the given size is 3:
1 2 3
2 4 6
3 6 9
For the given example, the return value should be:
[[1,2,3],[2,4,6],[3,6,9]]

*/

multiplicationTable = function(size) {
  let r = []
  for(let i = 1; i<=size; i++){
    let x = []
    for(let j = 1; j<=size; j++){
      x.push(i*j)
    }
    r.push(x)
  }
  return r
}
