function deleteNth(arr,n){
  const result = []
  for (const key of arr) {
    const exist = result.filter(item => item === key).length
    if (exist && exist === n) {
      continue
    } else {
      result.push(key)
    }
  }
  return result
}
