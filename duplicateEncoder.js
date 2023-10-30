/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
function duplicateEncode(str){
//create a var to hold string value that IGNORES case
var word = str.toLowerCase();
//create a var to hold the finished string to return after it's looped through 
var unique = '';
//loop through all letters in string
  for (var i = 0; i < word.length; i++) {
//check for any characters that repeat
    if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//for each character that never dupes, place (
      unique += '(';
    } else
//for each character that IS a dupe, place )
    unique += ')';
  }
//return the full string value where '(' are non duped and all')' are duped
  return unique;

}
//sol1
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}
//sol2
function duplicateEncode(word) {
  var letters = word.toLowerCase().split('')
  return letters.map(function(c, i) {
    return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
  }).join('')
}
