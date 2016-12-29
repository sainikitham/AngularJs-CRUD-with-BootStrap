var myapp = angular.module("myapp",['angularUtils.directives.dirPagination']);
myapp.controller("myctrl",function($scope,$http){
	$http.get('angular-crud.json')
    .then(function(response) {
   	$scope.users = response.data;
	});	
	$scope.newUser = {};
	$scope.clickeduser = {};
	$scope.savedetails = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
	};
	$scope.getdetails = function(user)
	{
		$scope.clickeduser = user;
	};
	$scope.updateuser = function()
	{
		
	};
	 $scope.removeTask = function (index) {
		 $scope.deleteuser = function()
		 {
			 $scope.users.splice(index, 1);
		 }
     };
     
 });