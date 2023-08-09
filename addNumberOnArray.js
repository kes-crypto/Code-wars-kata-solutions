function addNumbers(n)
{
  var foo = [];

for (var i = 0; i <= n; i++) {
   foo.push(i);
}
let sum = 0;
for (var i = 0; i < foo.length; i++) {
        sum += foo[i]
    }
return sum;
}
console.log(addNumbers(6))
//output 21
