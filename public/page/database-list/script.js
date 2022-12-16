const dblist = ["browsers", "companys"];
dblist.map(db => {
    const fL = db.charAt(0).toUpperCase();
    const rL = db.substring(1)

    $("#content").prepend('<button class="w3-button w3-orange"><a href="../../data/' + db + '-db.json"><i class="fa-solid fa-link"></i> ' + `${fL+rL}` +'</a></button>');
});
