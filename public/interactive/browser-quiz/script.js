let shuffleArray = (arr) => {
  arr.sort(() => Math.random() - 0.5);
}

g.fetchJSON("../../data/browsers-db.json", data => {

  let { items } = data, item, pos = -1, img = $("#image");
  shuffleArray(items);

  $("#next").on("click", () => {
    $("#next").html('<i class="fa-solid fa-forward"></i> Next Logo');
    pos += 1;
    item = items[pos];

    $("#image").prop("src", item.image);
    $("#anwser").html('<i class="fa-solid fa-face-thinking"></i> Guess now!');

  });
  $("#show").on("click", () => {
    $("#anwser").html(`<i class="fa-solid fa-circle-info"></i> It is ${item.name} made by ${item.company}. Released ${item.release}`);
  });
});

$(document).on("keyup", evt => {
  evt.key == " " ? g.trigger($("#next"), "click") : ""
  evt.key == "Enter" ? g.trigger($("#show"), "click") : ""
});