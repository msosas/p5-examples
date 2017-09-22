var model = require('../models/functions.js');

// *********** Page Handling  ****************

exports.hello = function(req,res) {

  model.hello(req.query.name,function(err,data){
    if (err) {
      console.log("Error code: " + err.code);
      res.sendStatus(500);
      res.end();
    }
    else {
      res.send(data);
      res.end();
    }
  });
};

exports.table = function(req,res) {
  model.table(function(err,data){
    if (err) {console.log("Error code: " + err.code);
      res.sendStatus(500);
      res.end();
    }
    else {
      res.send(data);
      res.end();
    }
  });
};

