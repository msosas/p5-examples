/*global require __dirname*/

var PORT = 3000;

//********  Dependencies  **************
var bodyParser = require("body-parser");

//********  Create Server ***********

var express = require("express")
 , app = express();
//var router = express.Router();


//*****   Start Server:  **********
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT); 
console.log("Listening on "+ PORT  + "...");

//*********************************

var routes = require('./api/routes/routes');
routes(app);

