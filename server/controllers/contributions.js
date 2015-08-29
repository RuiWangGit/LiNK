
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
		}



	}

})();
