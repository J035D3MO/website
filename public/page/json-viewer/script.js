const urlParams = new URLSearchParams(location.search);

$.getJSON(`../../data/${urlParams.get("file")}.json`, data => {
  console.info(data);
});