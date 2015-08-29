
//angular.module('link', []).controller('forumController', ['$scope', function forumController($scope) {

link.controller('forumController', function($scope, $location, $routeParams, forumFactory){

	console.log('testig');	

	$scope.addPost = function(){
		console.log('testig11');

		forumFactory.addPost($scope.newPost, function(data){
			console.log('new post successfully saved');
			$('#myModal').modal('hide');

			$( '#hidden-post label'  ).html( $scope.newPost.title );	    	
	    	var $div = $('#hidden-post');
	    	var $tmp = $div.clone().attr('id', '123' );
            $( '#hidden-post label'  ).html( "" );
            $('#forum-posts').append($tmp);

		});
		
	}

});