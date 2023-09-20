String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
//sol1
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};
//sol2
String.prototype.toJadenCase = function () {

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};
//sol3
String.prototype.toJadenCase = function () {
  var words = this.split(' ');

  for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
};
//sol4
String.prototype.toJadenCase = function () {
  var x = '';
  x += this[0].toUpperCase();
  for (var i = 1; i < this.length; i++) {
    if (this.charAt(i) == " ") {
      x += (this[i] + this[i + 1].toUpperCase());
      i++; // Increment i to stop the function concatenating the first letter of a new word twice
    } else {
      x += this[i];
    }
  }
  return x;
};
//sol5
String.prototype.toJadenCase = function () {
  return this.split(' ').
    map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
};
//sol6
String.prototype.toJadenCase = function () {
  
  if(!this.toString() || this.toString === "") {
  	return "";
  }
  
  //splitting the string into an array 
  var splitArray = this.toString().split(" ");
  
  //looping through the string to capitolize each word and
  //storing it back in the array
  for(var i = 0; i < splitArray.length; i++) {
  	var word = splitArray[i];
  	var capitolizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  	splitArray[i] = capitolizedWord;
  }
  
  //joining the split strings into a string
  return splitArray.join(" ");
};
