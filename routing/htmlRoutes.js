// const serverJS = require('../server.js');
const path = require("path");



// app.listen(PORT, function () {
//   console.log("App listening on PORT " + PORT);
//   htmlPages();
// });



module.exports = function(app){

  

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  app.get("*", function (req, res) {
    console.log('is this working');
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}

