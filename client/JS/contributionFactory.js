link.factory('contributionFactory', function($http){
	var factory = {}

	factory.getContributions = function(callback){
		console.log("inside the http request")
		$http.get('/contributions').success(function(output){
			callback(output)
		})
	}

	return factory
})
