
//angular.module('link', []).controller('forumController', ['$scope', function forumController($scope) {

link.controller('forumController', function($scope, $location, $compile, $routeParams, forumFactory){



	forumFactory.getPosts(function(data){
		//console.log('testtttingposts...');
		$scope.posts = data;
	})



	$scope.getComments = function(post_id){

		//console.log(post_id);
		forumFactory.getComments(post_id, function(data){
			//console.log('testtttingcomments...');
			$scope.comments = data;
		})

	}




	$scope.addPost = function(event){
		//console.log('testig11');

		//$scope.newPost.created_at = event.timeStamp;
		forumFactory.addPost($scope.newPost, function(data){
			//console.log('new post successfully saved');
			$('#myModal').modal('hide');

	            if ( $scope.posts == undefined ){
	            	console.log('here----->000');
	            	$scope.posts = [];
	            	$scope.posts.push( 
	
	            		{ "_id" :data._id , "userName" :  data.userName, "title" :  data.title,  "description" : data.description,  "updated_at" : data.updated_at, "created_at" : data.created_at }
	            
	            	 );
	            }
	            else {
	            	console.log('here----->222');
	            	$scope.posts.push( 
	
	            			{ "_id" :data._id , "userName" :  data.userName, "title" :  data.title,  "description" : data.description,  "updated_at" : data.updated_at, "created_at" : data.created_at }
	
	            		);
	            }
	            $scope.newPost = {};
		});

	}



	$scope.postHashSet = [];

	$scope.showComments = function(event){

		if ( event == undefined ){
			console.log( "+++++++++++should be here in showComments if statement", id );

			//console.log( $('#'+event.target.attributes[0].nodeValue ).parent().siblings().children().children() );

			$('#'+event.target.attributes[0].nodeValue ).parent().siblings().children(':nth-child(1)').removeAttr("checked");
			$scope.newComment = {};
			return;
		}
		else {


			$('#'+event.target.attributes[0].nodeValue ).parent().siblings().children(':nth-child(1)').removeAttr("checked");
			//checkBoxes.attr("checked", !checkBoxes.attr("checked"));

			// $('#'+event.target.attributes[0].nodeValue ).parent().siblings().children().children().children().hide();

			//console.dir('dfff'+event.target.attributes[0].nodeValue);
			var id = 'post-'+event.target.attributes[0].nodeValue;

			$scope.newComment = {};
			//$scope.comments ={};
			$scope.postHashSet[id] = undefined;

			if ($scope.postHashSet[id] == undefined) {
				//console.log('inside hashset'+id);
				$scope.getComments(event.target.attributes[0].nodeValue);

				$scope.postHashSet[id] = 1;
			}


		}

	}



	$scope.addComment = function(id){


		$scope.newComment.post_id = id;
		//$scope.newComment.created_at = event.timeStamp;
		forumFactory.addComment($scope.newComment, function(data){


   		console.dir( $scope.newComment);

	            //$( '#hidden-post .comments .comment'  ).html( "" );
	            if ( $scope.comments == undefined ){
	            	console.log('here----->');
	            	$scope.comments = [];
	            	$scope.comments.unshift( 
	
	            		{ "_id" :data._id , "userName" :  $scope.newComment.userName, "comment" : $scope.newComment.comment, "post_id" : data.post_id , "updated_at" : data.updated_at, "created_at" :data.created_at }
	            
	            	 );
	            }
	            else {
	            	console.log('here----->111');
	            	$scope.comments.unshift( 
	
	
	            		{ "_id" :data._id , "userName" :  $scope.newComment.userName, "comment" : $scope.newComment.comment, "post_id" : data.post_id , "updated_at" : data.updated_at, "created_at" :data.created_at }
	
	
	            		);
	            }
	
	            $scope.newComment = "";
	
		})



	}






});
