
//angular.module('link', []).controller('forumController', ['$scope', function forumController($scope) {

link.controller('forumController', function($scope, $location, $routeParams, forumFactory){


	console.log('testig');	
	$scope.addPost = function(){
		console.log('testig11');

		forumFactory.addPost($scope.newPost);

		$('#myModal').modal('hide');
	}


});