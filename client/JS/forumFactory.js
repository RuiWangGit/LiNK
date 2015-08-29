link.factory('forumFactory',  function($http, $location) {

	var factory = {};

	factory.addPost = function(info, callback){
		$http.post('/add', info).success(function(data) {
			  // console.log("to get:", data);
			
			callback();
			// });			
		})


	}



	return factory;


});