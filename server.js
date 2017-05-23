
// load our dependencies
// express is our framework, providing path and middleware functionality
var express = require("express");
// burgers_controller.js is our coded gateway for the server to reach
// the rest of the backend
var routes = require("./controllers/burgers_controller.js");
// handlebars allows us to in-and-out our html with {{tokens}}
var exphbs = require("express-handlebars");
// body-parser simplifies accessing the incoming package
var bodyParser = require("body-parser");

// 5-20-2017 SQLZ add
var db = require("./models");


// so how the hell do you use express anyway?
var app = express();
// port set to 3000 locally if not hosted
var port = process.env.PORT || 3000;

// create a namespace for our handlebars environment
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// 5-20-2017 SQLZ not sure we need all these for burgers, 
// but they look good and what could it hurt, right?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// provide a path to our app.js reference in HTML
app.use("/public", express.static("public"));
// path everything else
app.use("/", routes);

// start the server, I like the little display
// app.listen(port, function(){
	// console.log("Listening on port", port);
// });

// 5-20-2017 SQLZ sync and start the server in the callback
db.sequelize.sync({force:true}).then(function(){
	app.listen(port, function() {
	  console.log("App listening on PORT " + port);
	});
});

