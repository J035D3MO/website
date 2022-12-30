g.fetchJSON(`../../data/${urlParams.get("file")}.json`, data => {
  $("#dataview").val(data);
});