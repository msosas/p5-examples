module.exports = {
  hello: function(name,callback) {
    if (name == undefined) {
      name = "stranger"
    }
    callback(null, "Hello " + name);
  }
};
