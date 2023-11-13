/*
Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

Notes:

Spaces and special characters should remain the same.
Capital letters should transfer in the same way but remain capitilized.
Examples
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"
*/
function nextLetter(str) {
  return str.replace(/[a-zA-Z]/g, (letter) => {
    switch (letter) {
      case 'z':
        return 'a';
      case 'Z':
        return 'A';
      default:
        return String.fromCharCode(letter.charCodeAt() + 1);
    }
  });
}
//sol1
const nextUnicode = letter => String.fromCharCode(letter.charCodeAt() + 1)

const nextLetter = phrase => (
  phrase.replace(/[a-zA-Z]/g, letter => {
    if (letter === 'z') return 'a'
    if (letter === 'Z') return 'A'
    return nextUnicode(letter)
  })
)
//sol2
function nextLetter(str) {
    let arr = [...str];
    for(i=0; i<arr.length; i++){
        if ((arr[i]>='a' && arr[i] <'z') ||
            (arr[i]>='A' && arr[i] <'Z'))
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0)+1); 
        else{
            if (arr[i] == 'z') arr[i]='a';
            if (arr[i] == 'Z') arr[i]='A';
        }
        
    };

  return arr.join('');
}
