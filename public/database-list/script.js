const dblist = ["browsers", "companys"];
dblist.map(db => {
  $.getJSON("../data/" + db + "-db.json", data => {
    $("#content").append('<button class="w3-button w3-orange w3-padding-16"><a href="https://codebeautify.org/jsonviewer?input="' + data + '><i class="fa-solid fa-hand"></i>' + db +'</a></button>');
  });
});