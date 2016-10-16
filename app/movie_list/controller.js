/*
* @Author: taoyage
* @Date:   2016-10-07 15:31:03
* @Last Modified by:   taoyage
* @Last Modified time: 2016-10-09 19:48:31
*/

(function(angular){
	'use strict';

	//创建正在热映模块
	var module = angular.module('moviecat.movie_list', []);

	//配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/:category/:page', {
			templateUrl: 'movie_list/view.html',
			controller: 'MovieListController'
		});
	}]);

	module.controller('MovieListController',
		[
		'$scope',
		'$route',
		'$routeParams',
		'JsonpService',
		'AppConfig',
		function($scope,$route,$routeParams,JsonpService,AppConfig) {
			var count = AppConfig.pageSize;
			var page = parseInt($routeParams.page);
			var start = (page - 1) * count;
			$scope.title = 'Loading....';
			$scope.loading = true;
			$scope.subjects = [];
			$scope.totalCount = 0;
			$scope.totalPages = 0;
			$scope.currentPage = page;

			/*jsonp获取豆瓣数据*/
			JsonpService.jsonp(AppConfig.listApiAddress + $routeParams.category,
			{
				start:start,
				count:count,
				q : $routeParams.q
			},
			function(data){
				$scope.title = data.title;
				$scope.subjects = data.subjects;
				$scope.totalCount = data.total;
				$scope.totalPages = Math.ceil($scope.totalCount/count);
				$scope.loading = false;
				$scope.$apply();
			})

			/*分页处理*/
			$scope.goPages = function(page){
				if(page >= 1 && page <= $scope.totalPages){
					$route.updateParams({page:page});
				}
			}
		}]);

})(angular);

