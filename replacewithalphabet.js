function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.toLowerCase().split('')
  .filter( letter => {
    let index = alphabet.indexOf(letter);
    return index > -1;
  }  )
  .map( letter => alphabet.indexOf(letter) + 1 )
  .join(' ')
}
sol2
function alphabetPosition(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  
  return text.toLowerCase()
             .split('')
             .filter(t => letters.indexOf(t) > -1)
             .map(t => letters.indexOf(t)+1 || '')
             .join(' ');
}
