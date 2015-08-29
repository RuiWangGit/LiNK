//inject the ngRoute dependency to the module
var link = angular.module('link', ['ngRoute']);
//Use the config method to set up routing
link.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './partials/home.html'
		})
		.when('/instagram', {
			templateUrl: './partials/instagram.html'
		})
		.when('/contribution', {
			templateUrl: './partials/contribution.html'
		})
		.when('/contribution/add', {
			templateUrl: './partials/addContribution.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});
// *******************************************************************************
// ****************************** INSTAGRAM FACTORY AND CONTROLLER ***************
link.factory("InstagramFactory", function($http){
	factory = {}
	factory.getPhotos = function(callback) {
		$http.get("https://api.instagram.com/v1/tags/LibertyInNorthKorea/media/recent?access_token=1368406440.4f2e0c5.645c887cde2e46faa62f8d182d837060").success(function(output){
			callback(output);
		})
	}
	return factory
})

link.controller("InstagramController", function($scope,InstagramFactory){
	InstagramFactory.getPhotos(function(data){
		$scope.pictures = data
	})
})
