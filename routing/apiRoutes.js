// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const app = express();

const friendList = require("../app/data/friends")


module.exports = function (app) {

  app.get("/api/users", function (req, res) {
    return res.json(friendList);
  });
  app.post("/api/users", function (req, res) {
    var newUser = req.body;
    friendList.unshift(newUser)

    res.json(newUser);
  });
}
