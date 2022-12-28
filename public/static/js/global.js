const urlParams = new URLSearchParams(location.search);

const glob = {
  fetch: async (url, callback) => {
    await fetch(url)
    .then(res => {return res.text()})
    .then(text => {callback(text)});
  },
  fetchJSON: async (url, callback) => {
        await fetch(url)
    .then(res => {return res.json()})
    .then(json => {callback(json)});
  }
}