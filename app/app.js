/*
* @Author: taoyage
* @Date:   2016-10-07 15:26:36
* @Last Modified by:   taoyage
* @Last Modified time: 2016-10-16 19:57:03
*/

'use strict';


// Declare app level module which depends on views, and components
var app = angular.module('moviecat',
	[
	'ngRoute',
	'moviecat.movie_detail',
	'moviecat.movie_list',
	'moviecat.services.jsonp',
	'movievat.directives.auto_focus',
	'moviecat.search'
	]);

app.constant('AppConfig',{
	pageSize: 10,
	listApiAddress: 'https://api.douban.com/v2/movie/',
	detailApiAddress: 'https://api.douban.com/v2/movie/subject/'
});

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
