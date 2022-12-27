$("#content").show();
 
  $.getJSON("../../data/browsers-db.json", data => {
    function shuffleArray(arr) {
      arr.sort(() => Math.random() - 0.5);
    }

    var { items } = data, item, pos = -1;
    shuffleArray(items);

    $("#next").click(() => {
      $("#next").html('<i class="fa-solid fa-forward"></i> Next Logo');
      pos += 1;
      item = items[pos];

      $("#image").addClass("w3-animate-top");
      $("#image").prop("src", item.image);
      $("#anwser").html('<i class="fa-solid fa-face-thinking"></i> Guess now!');
      $("#image").removeClass("w3-animate-top");      

    });
    $("#show").click(() => {
      $("#anwser").html(`<i class="fa-solid fa-circle-info"></i> It is ${item.name} made by ${item.company}. Released ${item.release}`);
    });
  });

  $(document).on("keyup", evt => {
    evt.key == " " ? $("#next").click() : ""
    evt.key == "Enter" ? $("#show").click() : ""
  });