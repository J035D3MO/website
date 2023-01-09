g.fetchJSON(`../../data/${g.urlParams.get("file")}.json`, data => {
  $("#dataview").val(data);
});