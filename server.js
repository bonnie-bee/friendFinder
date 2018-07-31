

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
// const html = require('./routing/htmlRoutes.js')

const PORT = 3000;

// module.exports = express, bodyParser, path, app, PORT;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    htmlPages();
  });
  
  
  
  
  function htmlPages() {
  
    app.get("/", function (req, res) {
      console.log('is this working');
      res.sendFile(path.join(__dirname, "./public/home.html"));
    });
  
    app.get("/survey", function (req, res) {
      res.sendFile(path.join(__dirname, "./public/survey.html"));
    });
  
  
  }








