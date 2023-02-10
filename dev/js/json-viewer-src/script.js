let editor = new SpckEditor('#editor'), file = g.urlParams.get("file");

$(".bg-green").html(`<h2>You viewing preview of "${file}"</h2>`);

g.fetch(`../../data/${file}.json`, text => {
  editor.connect()
  .then(() => {

    return editor.send({
      project: 'Simple Project',
      open: `${file}.json`,
      files: [
        {path: `${file}.json`, text: text}
      ]
    })
  })
  .catch(() => console.log('failure'));
});