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

