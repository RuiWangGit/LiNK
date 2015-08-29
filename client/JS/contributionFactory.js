link.factory('contributionFactory', function($http){
	var factory = {}

	//get contributions from out db for the presentation should be Salesforce API
	factory.getContributions = function(callback){
		$http.get('/contributions').success(function(output){
			callback(output)
		})
	}
	// adding contributions for the presentation
	factory.addContribution = function(info, callback){
		$http.post('/contribution/add', info).success(function(output){
			callback(output);
		})
	}

	return factory
})
