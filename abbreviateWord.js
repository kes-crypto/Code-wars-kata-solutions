function abbrevName(name){

   'use strict'
    
    return name
        .replace(/\b(\w)\w+/g, '$1.')
        .replace(/\s/g, '') 
        .replace(/\.$/, '')
        .toUpperCase();

}
//sol1
const answer = [name[0]]
    for(let i = 0; i < name.length; i++) {
        if(name[i] === " ") {
            answer.push(name[i + 1]);
        }
    }
    return answer.map(el => el.toUpperCase()).join(".")
//sol2
function abbrevName(name){
   const newArray = name.split(" ")
   return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
}
//sol3
function abbrevName(name){
   return name.split(" ").map(el => el[0].toUpperCase()).join(".")
}
