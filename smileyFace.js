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
