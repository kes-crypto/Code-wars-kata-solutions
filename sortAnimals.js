/*
Consider the following class:

var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}
Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.
*/
const compareAnimals = (a, b) =>
  a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
  
const sortAnimal = animals =>
  animals ? animals.slice().sort(compareAnimals) : null
//sol1
function sortAnimal(animal) {
  if (animal) {
   return [...animal].sort((a, b) => {
     if (a.numberOfLegs === b.numberOfLegs){
        return a.name.localeCompare(b.name)
     } else {
        return a.numberOfLegs - b.numberOfLegs
     }
    })
  } else {
    return null
  }
}
//sol2
function sortAnimal(animals) {
    return animals.slice().sort((a,b)=>a.name.localeCompare(b.name)).sort((a,b)=>a.numberOfLegs-b.numberOfLegs);
}
//sol3
function sortAnimal(animals) {
  const arr = animals.slice(0);
  return arr.sort((a,b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name));
}
//sol4
function sortAnimal(animal) {
  if (animal==null)
    return null;
  var arr=[];
  for (var i=0; i<animal.length; ++i)
    arr.push(animal[i]);
  for (var i=0; i<arr.length-1; ++i)
    for (var j=i+1; j<arr.length; ++j)
    if(arr[i].numberOfLegs>arr[j].numberOfLegs||(arr[i].numberOfLegs==arr[j].numberOfLegs && arr[i].name>arr[j].name))
    {
      var c=arr[i];
      arr[i]=arr[j];
      arr[j]=c;
    }
  return arr;
}
