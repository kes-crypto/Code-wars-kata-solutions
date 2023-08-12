/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/
function isIsogram(str){

  // Turn all letters of the string to lower case and split it into an array. 

  var letters = str.toLowerCase().split('');
  var checkLetters = [];
  
  /* Check to see if the letter appears in the checkLetters array.
     If the letter is not already in the array it will push the letter into it. */

  letters.forEach(function(letter) {
    if(checkLetters.indexOf(letter) === -1) {
      checkLetters.push(letter);
    }
  });

  /* Now we have two arrays. If the letters array has non-duplicate letters then 
     it will be the same length as the checkLetters array. If not, the checkLetters array
     will be shorter. */

  /* Return true or false depending on whether the lengths of both arrays are equal */
    
  return letters.length === checkLetters.length ? true : false;

}
