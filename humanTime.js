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
