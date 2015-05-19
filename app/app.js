'use strict';
// Declare app level module which depends on views, and components

var myApp = angular.module('myApp', [
	'ngRoute',
	'myAppControllers',
    'myAppDirectives'
]);

myApp.config(['$routeProvider',
	function ($routeProvider){
		$routeProvider
			.when('/home',
			{
				controller: 'HomeController',
				templateUrl: 'components/home/home.html'
			})
			.when('/resume',
			{
				controller: 'ResumeController',
				templateUrl: 'components/resume/resume.html'
			})
			.otherwise({redirectTo: '/home'});


}]);

var myAppControllers = angular.module('myAppControllers', []);
var myAppDirectives = angular.module('myAppDirectives', []);

