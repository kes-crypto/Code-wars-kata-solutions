/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

function reverseSeq(N) {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
        newArr.push(i);
      
    }
    return newArr.reverse();
}
//sol1
const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};
//sol2
const reverseSeq = n => {
  let answer = [];          //intialize an array
  
  for (let i=n; i>0; i--){  //loop down from n to 1
    answer.push(i);         //push each i to the answer array
  }
  
  return answer;            //return answer;
};
function reverse(n){
return n.split().reverse().join()
    
}
