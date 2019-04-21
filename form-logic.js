
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
    UI.addSimulatedTouch(IPAMappings[phoneme])
  }

  await sleep(200);
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

// for talk demo

document.addEventListener("keydown", event => {
  if (event.repeat) return;
  inputBox = document.getElementById('ipaInput')
  if (event.keyCode === 77) { // m
      inputBox.value = 'mɑmɑ'
  }
  else if (event.keyCode === 72) { // h
    inputBox.value = 'hɑhɑ'
  }
  else if (event.keyCode === 80) { // p
    inputBox.value = 'hɑi pɑilɪidiz'

  }
});
