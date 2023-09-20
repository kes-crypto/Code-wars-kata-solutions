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
