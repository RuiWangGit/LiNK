

var mongoose = require('mongoose');
var Post = mongoose.model('Post');


module.exports = (function() {
	return {

		add: function(req, res){
			var post = new Post(req.body);
			post.save( function (err){
				if(err){
					res.send("failed to save new post");
				}
				else {
					res.redirect("/");
				}
			})	
		}


	}

})();