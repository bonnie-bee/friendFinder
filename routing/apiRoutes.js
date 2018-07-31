const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.get("/api/users", function(req, res) { 
    return res.json(users); 
  });