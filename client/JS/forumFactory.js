link.factory('forumFactory',  function($http, $location) {

	var factory = {};

	factory.addPost = function(post, callback){

		$http.post('/add/post', post).success(function(data) {
			console.log("to make a new post data:", data);			
			callback(data);	
		})
	}


	factory.addComment = function(comment, callback ){
		console.log("factory sending comment");
		$http.post('/add/comment', comment).success( function(data){
			console.log("to make a new comment data:", data);			
			callback(data);	
		})
	}

	return factory;
});