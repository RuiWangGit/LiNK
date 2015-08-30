

var mongoose = require('mongoose');
var Post = mongoose.model('Post');


module.exports = (function() {
	return {

		add: function(req, res){
			var post = new Post(req.body);
			post.save( function (err, results){
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
			console.log('testing6');


			Post.find({}).exec( function(err, results){
				if ( err){
					res.send('fail to get from database');
				}
				else {
					console.log("..........!!!!");
					return res.json(results);
				}
			});
		},


	}

})();
