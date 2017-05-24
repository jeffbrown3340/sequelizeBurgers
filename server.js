var express = require("express");
var routes = require("./controllers/burgers_controller.js");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// 5-20-2017 SQLZ add
var db = require("./models");


var app = express();
var port = process.env.PORT || 3000;

// create a namespace for our handlebars environment
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use("/public", express.static("public"));
app.use("/", routes);

db.sequelize.sync().then(function(){
	app.listen(port, function() {
	  console.log("App listening on PORT " + port);
	});
});

