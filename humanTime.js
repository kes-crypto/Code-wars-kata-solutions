function humanReadable(seconds) {

  var time = seconds / 3600;
  var hh = Math.floor(time);
  var q = (time - hh) * 60;
  var mm = Math.floor(q);
  var ss = (q - mm) * 60;
  if (seconds < 0 || seconds > 359999) {
    return null;
  }
  if (seconds === 0) {
    return '00:00:00'
  }

  if (seconds > 3600) {
  
    return `${hh}:${mm}:${ss}`;
  }
  else if (seconds < 3599 && seconds > 59) {
    return `00:0${mm}:${ss}`;
  }

  else {
    return `00:00:${ss}`;
  }

}
sol1
function humanReadable(seconds) {
  var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;
  return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)
}

function formatDate(n){
  var number = Number.parseInt(n)
  return number > 9? number : '0'+number;
}
sol2
function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}
//sol3
const humanReadable = seconds =>
  [seconds / 3600 ^ 0, seconds / 60 % 60 ^ 0, seconds % 60].map(val => `${val}`.padStart(2, `0`)).join(`:`);
