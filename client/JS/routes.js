//inject the ngRoute dependency to the module
var link = angular.module('link', ['ngRoute']);
//Use the config method to set up routing
link.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './partials/home.html'
		})
		.when('/instagram', {
			templateUrl: './partials/instagram.html',
			controller: 'InstagramController'
		})
		.otherwise({
			redirectTo: '/'
		})
});
