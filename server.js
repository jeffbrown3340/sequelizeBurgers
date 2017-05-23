
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

// so how the hell do you use express anyway?
var app = express();
// port set to 3000 locally if not hosted
var port = process.env.PORT || 3000;

// create a namespace for our handlebars environment
// question for the TA grading this assignment:
// is the immediately above usage (this line number minus 2)
// of "create a namespace" ... is that a correct and
// appropriate usage of the term "namespace" ?
// please reply in BCS comments, thank you
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// set our bodyParser environment, parse text as URL explicitly
app.use(bodyParser.urlencoded({ extended: false }));

// provide a path to our app.js reference in HTML
app.use("/public", express.static("public"));
// path everything else
app.use("/", routes);

// start the server, I like the little display
app.listen(port, function(){
	console.log("Listening on port", port);
});
