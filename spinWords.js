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
