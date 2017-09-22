var fs = require('fs');

module.exports = {
  hello: function(name,callback) {
    if (name == undefined) {
      name = "stranger"
    }
    callback(null, "Hello " + name);
  },

  table: function (callback) {
  	fs.readFile('data.txt', function (err,data) {
  		var res = data.toString();
  		callback(null, res);	
  	});
  	
  }
};
