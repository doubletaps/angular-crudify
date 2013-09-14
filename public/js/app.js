'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    	when('/',				{templateUrl: 'partials/index',					controller: IndexCtrl}).
    	// when('/index',			{templateUrl: 'index',					controller: AppCtrl}).
  		when('/listUsers',		{templateUrl: 'partials/listUsers',		controller: ListUsersCtrl}). 
    	when('/addUser', 		{templateUrl: '/partials/addUser',		controller: AddUserCtrl}).
    	when('/editUser/:id',	{templateUrl: '/partials/editUser',		controller: EditUserCtrl}).
    	when('/showUser/:id',	{templateUrl: '/partials/showUser',		controller: ShowUserCtrl}).
    	when('/deleteUser/:id',	{templateUrl: '/partials/deleteUser',	controller: DeleteUserCtrl}).


  		when('/listLocations',		{templateUrl: 'partials/listLocations',		controller: ListLocationsCtrl}). 
    	when('/addLocation', 		{templateUrl: '/partials/addLocation',		controller: AddLocationCtrl}).
    	when('/editLocation/:id',	{templateUrl: '/partials/editLocation',		controller: EditLocationCtrl}).
    	when('/showLocation/:id',	{templateUrl: '/partials/showLocation',		controller: ShowLocationCtrl}).
    	when('/deleteLocation/:id',	{templateUrl: '/partials/deleteLocation',	controller: DeleteLocationCtrl}).

  		when('/listMovies',		{templateUrl: 'partials/listMovies',		controller: ListMoviesCtrl}). 
    	when('/addMovie', 		{templateUrl: '/partials/addMovie',		controller: AddMovieCtrl}).
    	when('/editMovie/:id',	{templateUrl: '/partials/editMovie',		controller: EditMovieCtrl}).
    	when('/showMovie/:id',	{templateUrl: '/partials/showMovie',		controller: ShowMovieCtrl}).
    	when('/deleteMovie/:id',	{templateUrl: '/partials/deleteMovie',	controller: DeleteMovieCtrl}).


    	otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }]);