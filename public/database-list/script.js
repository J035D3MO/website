const dblist = ["browsers", "companys"];
dblist.map(db => {
    $("#content").append('<button class="w3-button w3-orange w3-padding-16"><a href="../data/' + db + '-db.json"><i class="fa-solid fa-hand"></i>' + db +'</a></button>');
});
