var min = function(list){
    
   return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list)
}
//sol1
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}
//sol2 super clean
const min = $ => $.sort((a, b)=> a - b)[0]
const max = $ => $.sort((a, b)=> b - a)[0]
//sol3
const min = list => list.reduce((a, b) => a < b ? a : b)

const max = list => list.reduce((a, b) => a > b ? a : b)
