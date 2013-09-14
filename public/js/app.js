'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    	when('/',				{templateUrl: 'index',					controller: AppCtrl}).
    	when('/index',			{templateUrl: 'index',					controller: AppCtrl}).
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

    	otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }]);