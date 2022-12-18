$.getJSON = (url, callback) => {
  fetch(url).then(res => {
  return res.json();
}).then(data => callback(data)).catch(err => {
  // Do something for an error here
});
}
var urlParams = new URLSearchParams(location.search);