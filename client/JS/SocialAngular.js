link.factory("InstagramFactory", function($http){
	factory.getPhotos = function(callback) {
		$http.get("https://api.instagram.com/v1/tags/LibertyInNorthKorea/media/recent?access_token=1368406440.4f2e0c5.645c887cde2e46faa62f8d182d837060").success(function(output){
			callback(output);
		})
	}
})

link.controller("InstagramController",function($scope,InstagramFactory){
	InstagramFactory.getPhotos(callback) 
	{
		$scope.pictures = callback
		console.log("We got this pics in controller ",$scope.pictures)
	}
}) 