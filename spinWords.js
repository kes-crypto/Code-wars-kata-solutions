const spinWords = (string) => {
  const re = / /g;
  const stringArray = string.split(re)
  
  return (
  [stringArray.map(element => {
    return (element.length >= 5 ? 
            [...element].reverse().join(" ").replace(re, "") 
            : element)
  })]
  )[0].join(" ")
}
//sol1
function spinWords(str){
  return str.split(' ')
    .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
    .join(' ');
}
//sol2
function spinWords(phraseOrWord){
  //TODO Have fun :)
  //split by space
  const arrayWord = phraseOrWord.split(" ");
  if (arrayWord.length == 1) {
    return canRevert(phraseOrWord)
           ? revertWord(phraseOrWord)
           : phraseOrWord;
  }
  else {
    let spinnedArray = arrayWord.map(elem => {
      return canRevert(elem)
             ? revertWord(elem)
             : elem
    })
    
    return spinnedArray.join(" ")
  }
}

function canRevert(word) {
  return word.length >= 5
}

function revertWord(word){
  if (word.length) {
    return word.split("").reverse().join("")
  }
}
//sol3
spinWords = s => s.split(' ').map(e => e.length > 4 ? e.split('').reverse().join('') : e).join(' ');
