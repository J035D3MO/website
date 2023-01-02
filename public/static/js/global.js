const g = {
  urlParams: new URLSearchParams(location.search),
  fetch: async (url, callback) => {
    await fetch(url)
      .then(res => { return res.text() })
      .then(text => { callback(text) });
  },
  fetchJSON: async (url, callback) => {
    await fetch(url)
      .then(res => { return res.json() })
      .then(json => { callback(json) });
  },
  trigger: (elem, event) => {
    let evt = new Event(event);
    elem.dispatchEvent(evt);
  },
  shuffleArray: (arr) => {
  let arr2 = arr.sort(() => Math.random() - 0.5);
  return arr2;
},
showPart: (n) => {let t=$(".page");"block"!=$(t[n]).css("display")&&(t.each((function(){$(this).hide()})),$(t[n]).show())},
hasParam: (param) => {return g.urlParams.has(param)},
}