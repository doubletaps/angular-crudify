'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    	when('/',				{templateUrl: 'partials/index',			controller: IndexCtrl}).
  		when('/index',			{templateUrl: 'partials/index',			controller: IndexCtrl}). 
    	when('/addUser', 		{templateUrl: '/partials/addUser',		controller: AddUserCtrl}).
    	when('/editUser/:id',	{templateUrl: '/partials/editUser',		controller: EditUserCtrl}).
    	when('/showUser/:id',	{templateUrl: '/partials/showUser',		controller: ShowUserCtrl}).
    	when('/deleteUser/:id',	{templateUrl: '/partials/deleteUser',	controller: DeleteUserCtrl}).
    	otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);