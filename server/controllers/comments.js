
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
		},

		show: function(req, res){
			console.dir(req.body.post_id.slice(2, req.body.post_id.length));
			

			Comment.find({post_id:req.body.post_id.slice(2, req.body.post_id.length)}, function(err, results){
				if ( err){
					res.send('fail to get from database');
				}
				else {
					console.log("..........!!!!");
					return res.json(results);
				}
			});
		}


	}

})();