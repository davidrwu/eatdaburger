var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Create a New Burger
router.post('/burger/create', function (req, res) {
  burger.create(req.body.burger_name, function() {
    res.redirect('/index');
  });
});

// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.update(req.params.id, function() {
    res.redirect('/index');
  });
});

module.exports = router;