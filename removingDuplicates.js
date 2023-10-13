//filter method
function removeDuplicates(data){
  return data.filter((value,index)=>data,indexOf(value)===index)
}
//using sets
function removeDuplicates(data){
  return [...new Set(data)]
}
//for each loop
function removeDuplicates(data){
let unique = []

data.forEach(element => {
  if(!unique.includes(element)){
    unique.push(element)
  }
}) 
  return unique
}
//reduce
function removeDuplicates(data){
  let unique = data.reduce(function(a,b){
    if(a.indexOf(b) < 0)a.push(b)
    return a 
  }, [] )
  return unique
}
//underscore
var array = [2, 2, 3, 3, 1, 1, 4, 4]
console.log(_uniq(arr, false))
