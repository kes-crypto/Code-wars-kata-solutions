/*
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/
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
//sol1
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
//sol2
const deleteNth = (a, x) => {
  let m = {};
  return a.filter( v => (m[v] = m[v]+1||1) <= x );
}
//sol3
function deleteNth(arr,x){
  while (true) {
    for (var i = 0; i < arr.length; ++i) {
      var count = 0;
      
      for (var j = 0; j < arr.length; ++j) {
      
        if (arr[i] === arr[j]) {
          ++count;
          
          if (count > x) {
            arr.splice(j, 1);
            break;
          }
        }        
      }
      if (j !== arr.length) break;      
    }
    if (i === arr.length) break;
  }
  
  return arr;
}
//sol4
function deleteNth(arr,n){
  new_arr = []
  arr.forEach((element) => {
    if (new_arr.filter(i => i === element).length < n){
      new_arr.push(element);
    }
  })
  return new_arr;
}
//sol5
function deleteNth(arr,n){
  new_arr = []
  arr.forEach((element) => {
    if (new_arr.filter(i => i === element).length < n){
      new_arr.push(element);
    }
  })
  return new_arr;
}
//sol6
const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f=>f== e).length < x );
