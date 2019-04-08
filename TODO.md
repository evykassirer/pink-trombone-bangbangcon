## TODO

make it sound better! :p

- I can hear the voice start slightly before initial consonants and after ending consonants (if they're voiced) -- this is a top priority for fixing
- why do unvoiced consonants sound pretty much entirely voiced still? possibly related to touches/voice not being super sychronous

- the glottal on voice start (or maybe just the abruptness?) makes things like 'ha ha ha' weird (so far mainly an issue for h only, but possibly other things would benefit from gradual voice)


tooling

- make it easier to enter ipa mappings in text field? annoying to copy paste symbols
- ideally only save clicks in explore mode that are on the main section
  - voicebox control, about, etc shouldn't save
- ~drawPositions draws weird symbols (this might be a text editor bug!)~
  - it was! UTF-8 with BOM fixed it (whatever that means)

### IPA mappings

- add from drawPositions function
- fix them :p
- add missing phonemes from drawPositions

### explore stringing together mappings

- does the delay from touch to sound cause issues?
- does making all sounds happen for the same amount of time sound really weird?
  - research: which sounds do we make for longer than others
- moving between unvoiced and voiced sounds, how to time that?
  - research: when does voice turn on/off?
  - for h it might be better if the voice transition is more gradual

### research

- fricatives (app isn't very good at them)
- the math used in the app for tongue, nose, etc (in tract-ui)
- read research papers cited in BIBLIOGRAPHY
- read notes at bottom of https://www.antimoon.com/how/pronunc-soundsipa.htm
