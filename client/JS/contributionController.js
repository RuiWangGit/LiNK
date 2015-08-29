link.controller('contributionController', function($scope, contributionFactory){
	console.log("inside the controller")
	contributionFactory.getContributions(function(data){
		console.log(data);
	})
})
