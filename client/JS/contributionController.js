link.controller('contributionController', function($scope, contributionFactory){

	contributionFactory.getContributions(function(data){
		console.log(data);
	})

})
