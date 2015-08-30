
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');


module.exports = (function() {
	return {

		add: function(req, res){
			var comment = new Comment(req.body);
			comment.save( function (err, results){
				if(err){
					res.send("failed to save new post");
				}
				else {
					// res.redirect("/");
					return res.json(results);
				}
			})	
		}


	}

})();