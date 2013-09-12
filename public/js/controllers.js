'use strict';

/* Controllers */

function AppCtrl($scope, $http) {

}

function IndexCtrl($scope, $http) {
	// $scope.message = "IndexCtrl";
	$http.get('users').
		success(function(data, status, headers, config) {
			$scope.users = data;
		});
}

function AddUserCtrl($scope, $http, $location) {
	$scope.message = "AddUserCtrl";
	// console.log("AddUserCtrl");
	$scope.form = {};

	$scope.submitUser = function () {
    	$http.post('users', $scope.form).
      		success(function(data) {
        		$location.path('/');
      		});
	};
	$scope.message = "AddUserCtrl"
}

function EditUserCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/users/' + $routeParams.id).
    success(function(data) {
      $scope.form = data;
    });

  $scope.editUser = function () {
  	$scope.message  = $scope.form.username + $scope.form.password;
    $http.put('/users/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/showUser/' + $routeParams.id);
      });
  };
}

function ShowUserCtrl($scope, $http, $routeParams) {
  $http.get('/users/' + $routeParams.id).
    success(function(data) {
      $scope.user = data;
    });
}

function DeleteUserCtrl($scope, $http, $location, $routeParams) {
	$scope.message = $routeParams.id;
	$http.get('users/' + $routeParams.id).
		success(function(data) {
			$scope.user = data;
		});

	$scope.deleteUser = function () {
		$http.delete('users/' + $routeParams.id).
			success(function(data) {
				$location.url('/');
			});
	};

	$scope.home = function () {
    	$location.url('/');
	};

}

