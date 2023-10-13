//filter method
function removeDuplicates(data){
  return data.filter((value,index)=>data,indexOf(value)===index)
}
//using sets
function removeDuplicates(data){
  return [...new Set(data)]
}
//for each loop
