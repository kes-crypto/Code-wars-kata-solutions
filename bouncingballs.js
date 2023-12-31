//Failed attempt
function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}
//sol1
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  
  let seen = 0;
  
  while (h > window) {
    seen++;
    h *= bounce;
    
    if (h > window) {
      seen++;
    }
  }
  return seen;
}
//sol2
function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}
//sol3
function bouncingBall(h,  bounce,  window) {
  if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
    return -1;
  }

  var newHeight = h * bounce;
  return bouncingBall(newHeight, bounce, window) + 2;
}
//sol4
function bouncingBall(h,  bounce,  window) {
  for(let i = -1; true; i += 2){
    if(h <= window || h <= 0 || bounce <= 0 || bounce >= 1) return i;
    h = h * bounce;
  } 
}
