module.exports = function(app) {
	var controller =  require('../controllers/controller');
	
	app.route('/hello')
	.get(controller.hello);

};