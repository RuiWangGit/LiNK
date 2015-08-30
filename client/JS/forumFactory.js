link.factory('forumFactory',  function($http, $location) {

	var factory = {};

	factory.addPost = function(post, callback){

		$http.post('/add/post', post).success(function(data) {
			console.log("to insert a new post data:", data);			
			callback(data);	
		})
	}


	factory.addComment = function(comment, callback ){
		console.log("factory sending comment");
		$http.post('/add/comment', comment).success( function(data){
			console.log("to insert a new comment data:", data);			
			callback(data);	
		})
	}


	factory.getPosts = function( callback ){
		console.log('sdfsf');
		$http.post('/show/posts').success(function(data) {
			console.log("to show posts data:", data);			
			callback(data);	
		})
	}	

	factory.getComments = function( post_id, callback ){
		console.log('sdfsfdfdftesting');		
		$http.post('/show/comments', {'post_id':post_id }).success(function(data) {
			console.log("to show comments data:", data);			
			callback(data);	
		})

	}

	return factory;
});