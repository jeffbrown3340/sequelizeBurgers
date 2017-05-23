// just like we did in class, 'cept no cat meat
// all beef never frozen here
var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();

// get the existing data, 
router.get("/", function(req, res) {
	burger.selectAll(function(data){
		if(!req.xhr) {
            // if it's not jquery it must be the whole list
			res.render("burgers/index", {burgers: data});
		} else {
            // otherwise its a onesie
            res.render("partials/burgers/all", { burgers: data, layout: false });
        }
	});
});

// respond to the add burger button
router.post("/", function(req, res) {
    burger.insertOne({
        burger_name: req.body.name,
        devoured: req.body.devoured
    }, function(data) {
        res.json(data);
    });
});

// respond to the EAT ME button
router.put("/:id", function(req, res) {
    burger.updateOne(
        { id: req.params.id }, 
        { devoured: req.body.devoured }, 
        function(data) {
            res.json(data);
        }
    );
});

module.exports = router;






