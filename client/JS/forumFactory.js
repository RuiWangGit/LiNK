link.factory('forumFactory',  function($http, $location) {

	var factory = {};

	factory.addPost = function(info, callback){

		$http.post('/add', info).success(function(data) {
			console.log("to make a new post data:", data);			
			callback(data);	
		})
	}

	return factory;
});