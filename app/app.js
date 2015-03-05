'use strict';
// Declare app level module which depends on views, and components

var myApp = angular.module('myApp', [
	'ngRoute',
	'myAppControllers'
]);

myApp.config(['$routeProvider',
	function ($routeProvider){
		$routeProvider
			.when('/home',
			{
				controller: 'HomeController',
				templateUrl: 'components/home/home.html'
			})
			.when('/view2',
			{
				controller: 'View2Controller',
				templateUrl: 'components/view2/view2.html'
			})
			.otherwise({redirectTo: '/home'});


}]);

var myAppControllers = angular.module('myAppControllers', []);