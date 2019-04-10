## TODO


### sound improvements that don't need further research

- NEXT: I can hear the voice start slightly before initial consonants and after ending consonants (if they're voiced)
- hard to differentiate unvoiced/voiced consonants (possibly related to touches/voice not being super sychronous)
- gradual voice transitions instead of binary on/off
  - especially for h, transitioning into vowels would be nice
- marking vowel touches and having relevant constants respect them? list what consonants depend on vowel?

### research

- fricatives, what is fricative intensity doing
- b/p, what's the difference? is it just amount of air?
- what about g/k and other pairs I'm having trouble hearing difference of?
- how do we produce the h sound
- when do we turn our voice on/off? (related to h)
- how different vowels are formed, really (and how much does the app mimic this, tongue control and oral cavity combine how?)
- medium priority
  - ADD NOTES FROM ADDING INITIAL IPA - there were lots of questions there
  - do we make different sounds for different lengths of time?
  - look into the math used in the app for tongue, nose, etc (in tract-ui)
- less priority
  - read research papers cited in BIBLIOGRAPHY
  - read notes at bottom of https://www.antimoon.com/how/pronunc-soundsipa.htm


### tooling

- make it easier to enter ipa mappings in text field? annoying to copy paste symbols
- ideally only save clicks in explore mode that are on the main section
  - voicebox control, about, etc shouldn't save
- ~drawPositions draws weird symbols (this might be a text editor bug!)~
  - it was! UTF-8 with BOM fixed it (whatever that means)

### IPA mappings

- ~add from drawPositions function~
- add missing phonemes from drawPositions
- fix stuff :p

### explore stringing together mappings

- does the delay from touch to sound cause issues?
- does making all sounds happen for the same amount of time sound really weird?
- moving between unvoiced and voiced sounds, how to time that?
  - research: when does voice turn on/off?
  - for h it might be better if the voice transition is more gradual



