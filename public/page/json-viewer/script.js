$.getJSON(`../../data/${urlParams.get("file")}.json`, data => {
  console.info(data);
});