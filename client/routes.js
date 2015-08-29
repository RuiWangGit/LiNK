//inject the ngRoute dependency to the module
var link = angular.module('link', ['ngRoute']);
//Use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './partials/home.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});
