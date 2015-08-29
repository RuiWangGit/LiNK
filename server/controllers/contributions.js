
var mongoose = require('mongoose');
var Contribution = mongoose.model('Contributions');


module.exports = (function() {
	return {
		show: function(req, res){
			Contribution.find({}, function(err, contributions){
				if (err){
					console.log("error getting contributions")
				} else {
					console.log('succesfully got contributions from db', contributions)
					res.json(contributions);
				}
			})
		},
		add: function(req, res){
			console.log('the req', req.body)
			// var contribution = new Contribution({team: req.body.team})
		}


	}

})();
