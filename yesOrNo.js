/*
DESCRIPTION:
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
//sol1
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
//sol2
function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}
