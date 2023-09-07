/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
  const word = s.split(' ')
  const result = word.map(a => a.length);
  return Math.min(...result);
}

//compare to
function findShort(s){
  //var word = s.split(' ')
  var result = parseInt(word.map(a => a.length))
  return result
  return Math.min(result)
}
