
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
			}).limit(20).sort({'created_at': -1});
		},
		add: function(req, res){
			console.log('the req', req.body)
			var contributed
			if (req.body.contribution.toLowerCase() == "yes") {
				contributed = true
			} else {
				contributed = false
			}
			var contribution = new Contribution({team: req.body.team, amount: req.body.amount, description: req.body.description, contribution: contributed})
			contribution.save(function(err){
				if (err){
					console.log("error saving to the db")
				} else {
					console.log("succesfully added to the db");
					res.end();
				}
			})
		}


	}

})();
