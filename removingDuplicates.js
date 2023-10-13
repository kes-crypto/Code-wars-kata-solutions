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
