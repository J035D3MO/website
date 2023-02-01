g.fetchJSON("../../data/browsers-db.json", data => {
  $("#loading").hide();
  $("#playable").show();

  let { items } = data, item, pos = -1;
  items = g.shuffleArray(items);
  $("#next_image").prop("href", items[0].image);

  $("#next").on("click", () => {

    try {
    $("#next").html('<i class="fa-solid fa-forward"></i> Next Logo');
    pos += 1;
    item = items[pos];

    $("#image").prop("src", item.image);
    $("#anwser").html(`<i class="fa-solid fa-face-thinking"></i> Round ${pos + 1} - Guess now!`);
    
    $("#next_image").prop("href", items[pos + 1].image);
    } catch (e){
      $("#image").prop("src", "img/end.png");
      $("#anwser").text('Thanks for playing!');
    }

  });
  $("#show").on("click", () => {
    $("#anwser").html(`<i class="fa-solid fa-circle-info"></i> It is ${item.name} made by ${item.company}. Released ${item.release}`);
  });
});

$(document).on("keyup", evt => {
  evt.key == " " ? g.trigger($("#next"), "click") : ""
  evt.key == "Enter" ? g.trigger($("#show"), "click") : ""
});