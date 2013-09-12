'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.when('/',				{templateUrl: 'partials/index',			controller: IndexCtrl});
  	$routeProvider.when('/index',			{templateUrl: 'partials/index',			controller: IndexCtrl});   
    $routeProvider.when('/addUser', 		{templateUrl: '/partials/addUser',		controller: AddUserCtrl});
    $routeProvider.when('/editUser/:id',	{templateUrl: '/partials/editUser',		controller: EditUserCtrl});
    $routeProvider.when('/showUser/:id',	{templateUrl: '/partials/showUser',		controller: ShowUserCtrl});
    $routeProvider.when('/deleteUser/:id',	{templateUrl: '/partials/deleteUser',	controller: DeleteUserCtrl});
    $routeProvider.otherwise({redirectTo: '/view1'});
    $locationProvider.html5Mode(true);
  }]);