function countSmileys(smileys) {
  let firstStep = smileyHasValidEye;
  return smileys.filter(smiley => {
    let state = firstStep;
    for (let s of [...smiley]) {
      state = state(s);
    }
    return state === true;
  }).length;
}

function smileyHasValidEye(s) {
  if (s === ':' || s === ';') {
    return smileyHasValidNose;
  }
  return smileyHasValidEye;
}

function smileyHasValidNose(s) {
  if (s === '-' || s === '~') {
    return smileyHasValidMouth;
  }
  return smileyHasValidMouth(s);
}

function smileyHasValidMouth(s) {
  if (s === ')' || s === 'D') {
    return true;
  }
  return;
}
//sol1
function countSmileys(smileys) {
  let firstStep = smileyHasValidEye;
  return smileys.filter(smiley => {
    let state = firstStep;
    for (let s of [...smiley]) {
      state = state(s);
      if (typeof state !== 'function') return state;
    }
  }).length;
}

function smileyHasValidEye(s) {
  if (s === ':' || s === ';') {
    return smileyHasValidNose;
  }
  return smileyHasValidEye;
}

function smileyHasValidNose(s) {
  if (s === '-' || s === '~') {
    return smileyHasValidMouth;
  }
  return smileyHasValidMouth(s);
}

function smileyHasValidMouth(s) {
  if (s === ')' || s === 'D') {
    return true;
  }
  return false;
}
//sol2
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
//sol3
countSmileys=arr=> arr.filter(v => /(:|;)(-|~)?(\)|D)/.test(v)).length; 
//sol4
function countSmileys(arr) {
  console.log(arr)
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ':D' || arr[i] == ';D' || arr[i] == ':-D' || arr[i] == ':~D' || arr[i] == ';-D' || arr[i] == ';~D') {
      result.push(arr[i])
    } else if (arr[i] == ':)' || arr[i] == ';)' || arr[i] == ':-)' || arr[i] == ':~)' || arr[i] == ';-)' || arr[i] == ';~)') {
      result.push(arr[i])
    }
  }
  return result.length
}
