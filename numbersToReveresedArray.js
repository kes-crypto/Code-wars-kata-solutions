
function digitize(n) {
const arrayOfDigits = String(n) .split('') .map(Number)
  const reversed = arrayOfDigits.reverse();
  return reversed
}
