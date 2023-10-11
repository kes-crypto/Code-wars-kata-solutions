/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

const longest = (str1 = '', str2 = '') => {
   const combined = str1.concat(str2);
   const lower = combined.toLowerCase();
   const split =lower.split('');
   const sorted = split.sort();
   const res = [];
   for(const el of sorted){
      if(!res.includes(el)){
         res.push(el)
      }
   }
   return (res.join(''));
};
