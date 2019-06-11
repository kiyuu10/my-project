 var app = angular.module('myApp',['ngRoute','ui.select', 'ngSanitize']);



 app.config(function ($routeProvider, $locationProvider) {
 	$locationProvider.html5Mode(true);

 	$routeProvider.when('/', {
 		templateUrl: 'content1.html',
 	})
 	$routeProvider.when('/about', {
 		templateUrl: 'about.html',
 	})
 	$routeProvider.when('/post', {
 		templateUrl: 'post.html',
 	}) 	
 	$routeProvider.when('/contact', {
 		templateUrl: 'contact.html',
 	})
 	.otherwise({ redirectTo: '/' })
 })