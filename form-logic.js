
// form styling
var inputBoxStyle = document.getElementById('ipaInput').style
inputBoxStyle.height = '60px';
inputBoxStyle.width = '780px';
inputBoxStyle.fontSize = '40px';

// --- end form styling ---

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function simulateCharacter(ipaText, index) {
  var endOfInput = index === ipaText.length;
  var isSpace = ipaText[index] === ' ';

  if (endOfInput || isSpace) {
    UI.setVoice(false);
    // weird lag in turning voice off (and on?) so i'll add this for now
    await sleep(200);
    UI.removeSimulatedTouches();
    UI.handleTouches();
  }
  if (endOfInput) return;

  if (!isSpace) {
    var phoneme = ipaText[index];
    var phonemeData = IPAMappings[phoneme]
    UI.addSimulatedTouch(phonemeData)
  }

  vowelDoubling = document.getElementById("vowelDoubling")
  phonemeTime = 200
  if (vowelDoubling.checked) {
    phonemeTime = 100
    previousLetterWasVowel = false
    if (index > 0) {
      previousPhoneme = ipaText[index-1];
      previousLetterWasVowel = (
        previousPhoneme in IPAMappings
        && IPAMappings[previousPhoneme].vowel
      )
    }

    if (phonemeData && phonemeData.vowel && !previousLetterWasVowel) {
      phonemeTime = 200
      if (index + 1 < ipaText.length) {
        nextPhoneme = ipaText[index+1];
        // I am not sure if this does anything, especially considering how much
        // there is dipthongs
        // I guess I can (TODO) try looking for the next non-vowel and check that,
        // which would work better
        nextPhonemeIsUnvoicedConsonant = (
          previousPhoneme in IPAMappings
          && !IPAMappings[previousPhoneme].voice
        )
        if (nextPhonemeIsUnvoicedConsonant) {
          phonemeTime = 150
        }
      }
    }
  }

  await sleep(phonemeTime);
  simulateCharacter(ipaText, index+1)
}

const form = document.getElementById('ipaForm');
form.onsubmit = function(e){
  e.preventDefault();
  ipaText = e.target[0].value;
  for (phoneme of ipaText) {
    if (!(phoneme in IPAMappings) && phoneme !== ' ') {
      alert(phoneme + ' is not a known phoneme in this app')
      return
    }
  }
  simulateCharacter(ipaText, 0);
};


toggle = document.getElementById("exploreModeToggle")
toggle.onclick = function(e) {
  UI.setExploreMode(toggle.checked);
}

// ---- for talk demo ----
// TODO remove this after the talk
// to stop this from blocking people from typing these keys :p
document.addEventListener("keydown", event => {
  inputBox = document.getElementById('ipaInput')
  if (event.keyCode === 77) { // m
      inputBox.value = 'mɑmɑ'
  }
  else if (event.keyCode === 72) { // h
    inputBox.value = 'hɑhɑ'
  }
  // else if (event.keyCode === 80) { // p
  //   inputBox.value = 'hɑi pɑilɪidiz'
  //
  // }
  // else if (event.keyCode === 87) { // w
  //   inputBox.value = 'hɑɪ wɑfldʒeɪɛs'
  // }
  else if (event.keyCode === 66) { // b
    inputBox.value = 'hɑɪ bɛɪŋbɛɪŋkɑn'
  }
});
