
//angular.module('link', []).controller('forumController', ['$scope', function forumController($scope) {

link.controller('forumController', function($scope, $location, $compile, $routeParams, forumFactory){



	forumFactory.getPosts(function(data){
		console.log('testtttingposts...');
		$scope.posts = data;
	})



	$scope.getComments = function(post_id){

		console.log(post_id);
		forumFactory.getComments(post_id, function(data){
			console.log('testtttingcomments...');
			$scope.comments = data;
		})

	}




	$scope.addPost = function(event){
		console.log('testig11');

		//$scope.newPost.created_at = event.timeStamp;
		forumFactory.addPost($scope.newPost, function(data){
			console.log('new post successfully saved');
			$('#myModal').modal('hide');

			$( '#hidden-post label'  ).html( $scope.newPost.title );
			$( '#hidden-post label'  ).attr('for', 'id'+data._id);
			$( '#hidden-post .post'  ).attr('id', 'id'+data._id);
			 // $( '#hidden-post label'  ).attr('for', data._id);
			 // $( '#hidden-post .post'  ).attr('id', data._id);

			$( '#hidden-post .description').html("<span class='name-span'>"+$scope.newPost.userName + "</span> : "+data.description );
			//$( '#hidden-post form .hidden_id'  ).attr('ng-init', "newComment.post_id='"+data._id +"'");
			//$( '#hidden-post form .hidden_id'  ).attr('ng-value', "'"+data._id+"'");
			$( '#hidden-post form '  ).attr('ng-submit', "addComment('"+data._id+"')");
			// var ngInit = $( '#hidden-post form .hidden_id'  ).attr('ng-init');
			// console.log('nginit'+ngInit);
			// $( '#hidden-post form .hidden_id'  ).attr('value', ngInit+data._id);

	    	var div = $('#hidden-post');
	    	var tmp = div.clone().attr('id', "post-"+ data._id );
            $( '#hidden-post label'  ).html( "" );

            var temp = $compile(tmp)($scope);
            angular.element( $('#forum-posts').prepend(temp) );
            $scope.newPost = {};

		});

	}

	$scope.postHashSet = [];

	$scope.showComments = function(event){

		if ( event == undefined ){
			console.log( "+++++++++++", id );

			console.log( $('#'+event.target.attributes[0].nodeValue ).parent().siblings().children().children() );

			$('#'+event.target.attributes[0].nodeValue ).parent().siblings().children(':nth-child(1)').removeAttr("checked");
			$scope.newComment = {};
			return;
		}
		else {

			console.log( "+++++++++++", id );

			console.log( $('#'+event.target.attributes[0].nodeValue ).parent().siblings().children().children() );
			// $('#'+event.target.attributes[0].nodeValue ).parent().siblings().children().children().toggle();

			// $('#'+event.target.attributes[0].nodeValue ).parent().siblings().children(':nth-child(4)').hide();
			// $('#'+event.target.attributes[0].nodeValue ).parent().siblings().children(':nth-child(5)').hide();
			// $('#'+event.target.attributes[0].nodeValue ).parent().siblings().children(':nth-child(6)').hide();
			// $('#'+event.target.attributes[0].nodeValue ).siblings().show();

			$('#'+event.target.attributes[0].nodeValue ).parent().siblings().children(':nth-child(1)').removeAttr("checked");
			//checkBoxes.attr("checked", !checkBoxes.attr("checked"));

			// $('#'+event.target.attributes[0].nodeValue ).parent().siblings().children().children().children().hide();

			console.dir('dfff'+event.target.attributes[0].nodeValue);
			var id = 'post-'+event.target.attributes[0].nodeValue;

			$scope.newComment = {};

			if ($scope.postHashSet[id] == undefined) {
				console.log('inside hashset'+id);
				$scope.getComments(event.target.attributes[0].nodeValue);

				// var div = $('.hidden-post-content');
			 //    var tmp = div.clone().attr('class', "post-content" );
			 //    console.log(tmp);
			 //    var temp = $compile(tmp)($scope);
				// angular.element( $('#'+id).append(tmp) );
				$scope.postHashSet[id] = 1;
			}


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


			$( '#hidden-post  .comments .comment'  ).html( $scope.newComment.comment+" By "+ "<span class='name-span'>"+ $scope.newComment.userName+"</span> ");
	    	var div = $('#hidden-post .comments .comment');
	    	var tmp = div.clone();
            $( '#post-'+data.post_id+'  .comments '  ).append(tmp );

            //$( '#hidden-post .comments .comment'  ).html( "" );
            $scope.newComment = "";

		})



	}






});
