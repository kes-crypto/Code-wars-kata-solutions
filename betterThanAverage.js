/*
DESCRIPTION:
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/
function betterThanAverage(classPoints, yourPoints) {
var items = classPoints.length
  // iterate over each item in the array
  let sum = 0
for (let i = 0; i < items; i++ ) {
  
  sum += classPoints[i];
}
var average = sum/items
if(average > yourPoints){
  return true
}
if(average < yourPoints){
  return false
}
 
}
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 45))

