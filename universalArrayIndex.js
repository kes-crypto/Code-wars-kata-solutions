/*
Task
In regular JavaScript, array indexes are very primitive and trivial — we can get array elements only by their strict ordinal number: from 
0
0 to the last element number in the array. If the index is outside this range, we will get undefined instead of the element.

Your task is to prevent getting undefined when using any real number as an index. Range of numbers: 
[
−
1
0
15
,
1
0
15
]
[−10 
15
 ,10 
15
 ].

You cannot convert an array to an object in this kata. The original array must remain an array. The Array.isArray(array) check must return true. All array methods and the length property must also remain.

Examples
Positive numbers that go beyond the number of elements in the array must go over the array again, creating a loop:

let array = [1, 2, 3];

array[3];    // 1
array[4];    // 2
array[5];    // 3
array[6];    // 1
array[1050]; // 1
array[7070]; // 3
Negative numbers represent selecting elements from the end of the array, in reverse order. Such indexes must also go through the array again, creating a loop:

let array = [1, 2, 3];

array[-0];   // 1

array[-1];   // 3
array[-2];   // 2
array[-3];   // 1
array[-4];   // 3
array[-101]; // 2
array[-500]; // 2
If a number has a decimal part, it must be rounded to the nearest integer. And only then be used as an index (creating a loop works the same way here).

Please note that this kata will use rounding half away from zero:

let array = [1, 2, 3];

array[1.4];    // 2
array[3.5];    // 2
array[-1.5];   // 2
array[-0.05];  // 1
array[627.59]; // 2
*/
