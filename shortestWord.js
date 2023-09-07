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
//sol2
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
//sol3
function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}
