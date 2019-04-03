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
  }
}

// ɑ (like pat) --- why can't I use ɑ? is it sublimeText?
IPAMappings[String.fromCharCode(593)] = {
  x: 222.83884738527215,
  y: 389.96798292422625,
  voice: true,
}
