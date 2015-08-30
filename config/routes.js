// First at the top of your routes.js file you'll have to require the controller

var posts = require('./../server/controllers/posts.js');
var comments = require('./../server/controllers/comments.js');
var Contribution = require('./../server/controllers/contributions.js')


module.exports = function(app) {

	app.post('/add/post', function(req, res){
    	console.log('00000 add in post');
    	posts.add(req, res);
  	})
  	app.post('/add/comment', function(req, res){
    	console.log('111111 add in comment');
    	comments.add(req, res);
  	})

  app.get('/contributions', function(req, res){
	  console.log("inside the route")
	  Contribution.show(req, res);
  })
  app.post('/contribution/add', function(req, res){
      contribution.add(req, res);
  })






}// end of module export
