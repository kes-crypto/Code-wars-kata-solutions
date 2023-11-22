/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/
function divisors(integer) {
  let r = []
  for(let i = 2; i<integer; i++){
    if(integer%i == 0) r.push(i)
  }
  let res = r.length !== 0 ? r : `${integer} is prime`
  return res
}
//sol1
function divisors(integer) {
    var divisors = [];
    for (var i = 2; i < integer - 1; i++){
        if (integer % i === 0) divisors.push(i);
    }
    if (divisors.length === 0) return '' + integer + ' is prime';
    return divisors;
}
//sol2
function divisors(integer) {
  var divisors = [...Array(integer).keys()].slice(2, integer).filter(div => integer % div == 0);
  return divisors.length > 0 ? divisors : integer + ' is prime';
};
//sol3
function divisors(integer) 
{
	var arr=[];

	for(var i=2; i<integer; i++)
	{
		if(integer%i)	continue;
		arr.push(i);
	}

	return arr.length ? arr : (integer+" is prime");
};
