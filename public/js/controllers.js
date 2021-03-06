'use strict';

/* Controllers */


$scope.home = function () {
	$location.url('/');
};


function AppCtrl($scope, $http, $location) {


	$scope.home = function () {
    	$location.url('/');
	};


}

function IndexCtrl($scope, $http, $location) {
 	$location.url('/');
}

/* User Controllers */

function ListUsersCtrl($scope, $http) {
	$http.get('users').
		success(function(data, status, headers, config) {
			$scope.users = data;
		});
}

function AddUserCtrl($scope, $http, $location) {
	$scope.form = {};

	$scope.submitUser = function () {
    	$http.post('users', $scope.form).
      		success(function(data) {
        		$location.path('/listUsers');
      		});
	};
}

function EditUserCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/users/' + $routeParams.id).
    success(function(data) {
      $scope.form = data;
    });

  $scope.editUser = function () {
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

}

/* Location Controllers */


function ListLocationsCtrl($scope, $http) {
	$http.get('locations').
		success(function(data, status, headers, config) {
			$scope.locations = data;
		});
}

function AddLocationCtrl($scope, $http, $location) {

	$scope.form = {};

	$scope.submitLocation = function () {
    	$http.post('locations', $scope.form).
      		success(function(data) {
        		$location.path('/listLocations');
      		});
	};
}

function EditLocationCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/locations/' + $routeParams.id).
    success(function(data) {
      $scope.form = data;
    });

  $scope.editLocation = function () {
    $http.put('/locations/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/showLocation/' + $routeParams.id);
      });
  };
}

function ShowLocationCtrl($scope, $http, $routeParams) {
  $http.get('/locations/' + $routeParams.id).
    success(function(data) {
      $scope.location = data;
    });
}

function DeleteLocationCtrl($scope, $http, $location, $routeParams) {
	$http.get('locations/' + $routeParams.id).
		success(function(data) {
			$scope.location = data;
		});

	$scope.deleteLocation = function () {
		$http.delete('locations/' + $routeParams.id).
			success(function(data) {
				$location.url('/listLocations');
			});
	};

}



/* Movie Controllers */


function ListMoviesCtrl($scope, $http) {
	$http.get('movies').
		success(function(data, status, headers, config) {
			$scope.movies = data;
		});
}

function AddMovieCtrl($scope, $http, $location) {
	$scope.form = {};

	$scope.submitMovie = function () {
    	$http.post('movies', $scope.form).
      		success(function(data) {
        		$location.path('/listMovies');
      		});
	};
}

function EditMovieCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/movies/' + $routeParams.id).
    success(function(data) {
      $scope.form = data;
    });

  $scope.editMovie = function () {
    $http.put('/movies/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/showMovie/' + $routeParams.id);
      });
  };
}

function ShowMovieCtrl($scope, $http, $routeParams) {
  $http.get('/movies/' + $routeParams.id).
    success(function(data) {
      $scope.movie = data;
    });
}

function DeleteMovieCtrl($scope, $http, $location, $routeParams) {
	$http.get('movies/' + $routeParams.id).
		success(function(data) {
			$scope.movie = data;
		});

	$scope.deleteMovie = function () {
		$http.delete('movies/' + $routeParams.id).
			success(function(data) {
				$location.url('/listMovies');
			});
	};

}

