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
