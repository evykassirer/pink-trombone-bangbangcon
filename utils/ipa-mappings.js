var IPAMappings = {
  f : {
    x: 444.5344129554656,
    y: 204.04858299595142,
    voice: false,
    fricative: 1,
  },
  m : {
    x: 483.45784418356453,
    y: 101.81430096051227,
    voice: true,
  },
  h : {
    x: 81.67539267015707,
    y: 463.6649214659686,
    fricative: 1,
    voice: false,
  },
  v : {
    x: 432.40223463687147,
    y: 194.41340782122904,
    voice: true,
    fricative: 0.1,
  },
  i : {
    x: 280.04667444574096,
    y: 294.74912485414234,
    voice: true,
  },
  d : {
    x: 368.96149358226376,
    y: 123.22053675612601,
    voice: true,
  },
  t : {
    x: 368.96149358226376,
    y: 123.22053675612601,
    voice: false,
  },
  p : {
    x: 457.1761960326721,
    y: 148.4247374562427,
    voice: false,
  },
  b : {
    x: 457.1761960326721,
    y: 148.4247374562427,
    voice: true,
  },
  // (like arm) --- need to save with UTF-8 with BOM for this to work correctly
  ɑ : {
    x: 222.83884738527215,
    y: 389.96798292422625,
    voice: true,
  },
  ŋ: { // ng
    x: 142.8872497365648,
    y: 124.55216016859852,
    voice: true,
  },
  s : {
    x: 365.9824046920821,
    y: 186.51026392961876,
    voice: false,
    fricative: 0.7,
  },
  z : {
    x: 363.34310850439886,
    y: 181.23167155425222,
    voice: true,
    fricative: 0.3,
  },
  ʃ : { // sh
    x: 301.75953079178885,
    y: 186.51026392961876,
    voice: false,
    fricative: 1,
  },
  Ʌ : { // cup
    x: 226.09970674486803,
    y: 351.9061583577713,
    voice: true,
  },
  æ : { // cat
    x: 235.77712609970675,
    y: 398.5337243401759,
    voice: true,
  },
  ɛ : { // bed
    x: 280.64516129032256,
    y: 391.49560117302053,
    voice: true,
  },
  e : { // bed (e is often used instead of ɛ)
    x: 280.64516129032256,
    y: 391.49560117302053,
    voice: true,
  },
  ɪ : { // hit
    x: 296.4809384164223,
    y: 316.7155425219941,
    voice: true,
  },
  ɒ : { // hot
    x: 182.99120234604106,
    y: 392.37536656891496,
    voice: true,
  },
  u : {
    multipleTouches: true,
    touches: [
      {
        x: 243.01412872841445,
        y: 305.18053375196234,

      },
      // hard to get lips right for u
      {
        x: 393.9267015706806,
        y: 202.93193717277487,
      },
    ],
    voice: true,
    fricative: 0.001,
  },
  w : {
    x: 425.1748251748252,
    y: 220.979020979021,
    voice: true,
  },
  n : {
    x: 329.3706293706294,
    y: 83.21678321678321,
    voice: true,
  },
  l : {
    x: 383.91608391608395,
    y: 205.5944055944056,
    voice: true,
  },
  k : {
    x: 158.74125874125872,
    y: 188.8111888111888,
    voice: false,
  },
  g : {
    x: 158.74125874125872,
    y: 188.8111888111888,
    voice: true,
  },
  ɔ: { // call
    x: 199.3006993006993,
    y: 350.3496503496504,
    voice: true,
  },
  ə : { // away (first vowel)
    x: 246.85314685314685,
    y: 359.44055944055947,
    voice: true,
  },
  ʒ : { // s in pleasure
    x: 301.75953079178885,
    y: 186.51026392961876,
    voice: true,
    fricative: 0.2,
  },
  o : {
    multipleTouches: true,
    touches: [
      {
        x: 391.26506024096386,
        y: 209.1867469879518,
      },
      {
        x: 208.8987764182425,
        y: 349.05450500556174,
      }
    ],
    voice: true,
  },
  ʊ : {
    x: 241.95804195804195,
    y: 330.7692307692308,
    voice: true,
  },
  // this is a pretty sketchy version or r, I think there's a lot more vowel stuff going no
  r : {
    multipleTouches: true,
    // some vowels are fine with r but not all, so I just moved the tongue to a vowel that worked :3
    touches: [
      {
        x: 300.94240837696333,
        y: 201.67539267015707,
      },
      {
        x: 238.74345549738217,
        y: 348.6910994764398,
      }
    ],
    voice: true,
    fricative: 0,
  }
}
