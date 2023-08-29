/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
*/
const order = words => {
  const findNumber = words.match(/[1-9]/g);
  const arrayWords = words.split(' ');
  let result = [];
  if (words.length === 0) return words;
  
  arrayWords.map((item, i) => {
    const index = findNumber.indexOf(i+1));
    result.push(arrayWords[index]);
  });
  return result.join(' ');
}

//sol 2
function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}

//sol3
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 
//soln 4
var reg = /\d/;

function order(words){
  return words.split(' ').sort(comparator).join(' ');
}

function comparator(word, nextWord) {
  return +word.match(reg) - +nextWord.match(reg)
}
//sol5
function order(words){
  // ...
  return words && words.split(' ')
    .map(word => word.match(/\d/) + word)
    .sort()
    .map(word => word.slice(1))
    .join(' ');
}
//sol6
function order(words) {
  if (!words) return '';
  
  var result = words.split(' ').map(word => {
    var orderAsString = word.split('').filter(c => !isNaN(c))[0];
    var order = Number(orderAsString);
    
    return {
      "order": order,
      "word": word
    };
  });
  
  result.sort((a, b) => a.order - b.order);
  
  return result.map(x => x.word).join(' ');
}
//sol7
const order = words => words ? words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' ') : '';
