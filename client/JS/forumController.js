
//angular.module('link', []).controller('forumController', ['$scope', function forumController($scope) {

link.controller('forumController', function($scope, $location, $compile, $routeParams, forumFactory){

	console.log('testig');	

	$scope.addPost = function(event){
		console.log('testig11');

		//$scope.newPost.created_at = event.timeStamp;
		forumFactory.addPost($scope.newPost, function(data){
			console.log('new post successfully saved');
			$('#myModal').modal('hide');

			$( '#hidden-post label'  ).html( $scope.newPost.title );
			$( '#hidden-post label'  ).attr('for', 'id'+data._id);	 
			$( '#hidden-post .post'  ).attr('id', 'id'+data._id);  

			$( '#hidden-post .description').html(data.description );
			//$( '#hidden-post form .hidden_id'  ).attr('ng-init', "newComment.post_id='"+data._id +"'");
			//$( '#hidden-post form .hidden_id'  ).attr('ng-value', "'"+data._id+"'");
			$( '#hidden-post form '  ).attr('ng-submit', "addComment('"+data._id+"')");
			// var ngInit = $( '#hidden-post form .hidden_id'  ).attr('ng-init'); 
			// console.log('nginit'+ngInit);
			// $( '#hidden-post form .hidden_id'  ).attr('value', ngInit+data._id); 

	    	var div = $('#hidden-post');
	    	var tmp = div.clone().attr('id', "post-"+data._id );
            $( '#hidden-post label'  ).html( "" );

            var temp = $compile(tmp)($scope); 
            angular.element( $('#forum-posts').append(temp) );

		});
		
	}

	$scope.postHashSet = [];

	$scope.showComments = function(event){
		console.dir(event.target.attributes[0].nodeValue);
		var id = 'post-'+event.target.attributes[0].nodeValue;

			if ($scope.postHashSet[id] == undefined) {
				console.log(id)	
				var div = $('.hidden-post-content');
			    var tmp = div.clone().attr('class', "post-content" );
			    console.log(tmp);
			    var temp = $compile(tmp)($scope); 
				angular.element( $('#'+id).append(tmp) );
				$scope.postHashSet[id] = 1;
			}		
	}



	$scope.addComment = function(id){
		console.log("====="+id);
		console.log('adding comment...');
		console.log($scope.newComment);
		console.log(event)
		
	
		$scope.newComment.post_id = id;
		//$scope.newComment.created_at = event.timeStamp;		
		forumFactory.addComment($scope.newComment, function(data){


			$( '#hidden-post  .comments .comment'  ).html( $scope.newComment.comment );		
	    	var div = $('#hidden-post .comments .comment');
	    	var tmp = div.clone();
            $( '#post-'+data.post_id+'  .comments '  ).append(tmp );

            //$( '#hidden-post .comments .comment'  ).html( "" );

		})



	}






});