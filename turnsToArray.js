function squareDigits(num){
  const arrayOfDigits = num.toString().split('')
  console.log(arrayOfDigits)
}
squareDigits(23452637)
//explanation
function squareDigits(num){
  //turning the number to an array
  const arrayOfDigits = num.toString().split('')
  //squaring each digit of the created array
  const map1 = arrayOfDigits.map((x) => x * x);
  //joining back the result in number format
  const map = Number(map1.join(""))
  return map
}
