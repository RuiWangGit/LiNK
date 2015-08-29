var Contribution = require('./../server/controllers/contributions.js')

module.exports = function(app){
	app.get('/contributions', function(req, res){
		console.log("inside the route")
		Contribution.show(req, res);
	})
}
