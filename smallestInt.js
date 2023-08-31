/*
DESCRIPTION:
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

//my soln
class SmallestIntegerFinder {
  findSmallestInt(args) {
    const array = args.sort(function(a, b){return b-a}).slice(-1)
    return  parseInt(array)
  }
}
//sol1
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}
//sol2
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}
//sol3
class SmallestIntegerFinder {
  findSmallestInt(args) {
    var lowest;
    for(var i in args){
      if(i==0){
        lowest = args[i];
      }
      else {
        if(lowest >= args[i]){
        lowest = args[i];
        }
      }
    }
    return lowest;
  }
}
