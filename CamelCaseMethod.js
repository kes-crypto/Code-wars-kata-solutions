/*Write a method (or function, depending on the language) that converts a string to camelCase, 
that is, all words must have their first letter capitalized and spaces must be removed.
Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/
//soln 1
String.prototype.camelCase=function(){
  const capitalize = (word) => {
    return word.slice(0,1).toUpperCase() + word.slice(1)
  }//edited
  
  return this
    .split(' ')
    .map(capitalize)
    .join('')
}

//sol 2
String.prototype.camelCase = function() {
  if (typeof this !== 'string' || !this.length) return '';
  
  return this
    .trim()
    .split(' ')
    .map(w => `${w[0].toUpperCase()}${w.toLowerCase().slice(1)}`)
    .join('');
}
//sol 3
String.prototype.camelCase = function() {
  const arr = this.split(' ');
  const result = [];
  arr.forEach((element) => {
    result.push(element.charAt(0).toUpperCase() + element.slice(1));
  });
  return result.join('');
};
//sol 4
String.prototype.camelCase=function(){
  //your code here
  let arrString = this.split(' ')
  let result = []
  arrString.forEach( (letter, i) => {
    result.push(letter.charAt(0).toUpperCase() + arrString[i].slice(1))
  })
  
  return result.join('')
}
//sol 5
String.prototype.camelCase = function () { 
  if(this.length==0) return ''

	let STR = this.toLowerCase()
		.trim()
		.split(/[ -_]/g)
		.map(word => word.replace(word[0], word[0].toString().toUpperCase()))
		.join('');
	return STR.replace(STR[0], STR[0].toUpperCase());
};
