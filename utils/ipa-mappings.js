var IPAMappings = {
  f : {
    x: 444.5344129554656,
    y: 204.04858299595142,
    voice: false,
    fricative: true,
  },
  m : {
    x: 483.45784418356453,
    y: 101.81430096051227,
    voice: true,
  },
  h : {
    x: 74.91995731056564,
    y: 458.48452508004266,
    fricative: true,
    voice: false,
  },
  v : {
    x: 431.27187864644105,
    y: 200.93348891481912,
    voice: true,
    fricative: true,
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
  }
}

// ɑ (like pat) --- why can't I use ɑ? is it sublimeText?
IPAMappings[String.fromCharCode(593)] = {
  x: 222.83884738527215,
  y: 389.96798292422625,
  voice: true,
}
