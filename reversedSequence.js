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
