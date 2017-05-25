var express = require("express");
// var burger = require("../models/burger.js")
var router = express.Router();
var db = require("../models");

// get the existing data, 
router.get("/", function(req, res) {
	console.log("begin router.get");
	var notReqXhr = !req.xhr;
	db.Burger.findAll({}).then(function(data){
		if (notReqXhr) {
			console.log("fired if");
  			res.render("burgers/index", {burgers: data});
		} else {
			console.log("fired else");
            // otherwise its a onesie
            res.render("partials/burgers/all", { burgers: data, layout: false });
        }
	});
	console.log("end router.get");
});

// respond to the add burger button
router.post("/", function(req, res) {
	db.Burger.create({
		burger_name: req.body.name,
		devoured: req.body.devoured
	}).then(function(oneBurger){
		res.json(oneBurger);
	});
});

// respond to the EAT ME button
router.put("/:id", function(req, res) {
	console.log("req.body=", req.body);
	db.Burger.update({devoured: true},{where: req.body}).then(function(data){
		res.json(data);
	});
});

module.exports = router;