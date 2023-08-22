
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
