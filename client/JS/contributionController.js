link.controller('contributionController', function($scope, contributionFactory){
	console.log("inside the controller")
	contributionFactory.getContributions(function(data){
		console.log(data);
		$scope.contributions = data;
	})
	$scope.addContribution = function(){
		console.log($scope.newContribution);
		contributionFactory.addContribution($scope.newContribution, function(){
			$scope.newContribution = {}
		})
	}
})
