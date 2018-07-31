const serverJS = require('../server.js');



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
  htmlPages();
});




function htmlPages() {

  app.get("/", function (req, res) {
    console.log('is this working');
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


}

