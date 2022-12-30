  $.getJSON("/data/browsers-db.json", data => {
    const { items } = data;
    var item, shown = [];
    $("#next").click(() => {
      $("#next").html('<i class="fa-solid fa-forward"></i> Next Logo')
      item = items[Math.floor(Math.random() * items.length)];
      if(shown.indexOf(item.name) == -1){
      $("#image").prop("src", item.image);
      $("#anwser").html('<i class="fa-light fa-face-thinking"></i> Guess now!');
      shown.push(item.name);
    } else {
      item = items[Math.floor(Math.random() * items.length)];
    }

    });
    $("#show").click(() => {
      $("#anwser").html(`<i class="fa-solid fa-circle-info"></i> It is ${item.name} made by ${item.company}. Released ${item.release}`);
    });
  });

  $(document).on("keyup", evt => {
    evt.key == " " ? $("#next").click() : ""
    evt.key == "Enter" ? $("#show").click() : ""
  });