var dblist = ["browsers", "companys"];
dblist.map(db => {
    let fL = db.charAt(0).toUpperCase(), rL = db.substring(1);

    $("#content").prepend(`<button class="w3-button w3-orange"><a href="../../page/json-viewer/?file=${db}-db.json"><i class="fa-solid fa-link"></i>${fL+rL}</a></button>`);
});
