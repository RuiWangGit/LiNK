link.factory('contributionFactory', function($http){
	var factory = {}

	factory.getContributions = function(callback){
		$http.get('contributions').success(function(output){
			callback(output)
		})
	}

	return factory
})
