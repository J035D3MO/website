var dblist = ["browsers", "companys"];
dblist.map(db => {
    var fL = db.charAt(0).toUpperCase();
    var rL = db.substring(1)

    $("#content").prepend('<button class="w3-button w3-orange"><a href="../../data/' + db + '-db.json"><i class="fa-solid fa-link"></i> ' + `${fL+rL}` +'</a></button>');
});
