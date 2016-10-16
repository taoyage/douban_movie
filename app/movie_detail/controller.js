/*
* @Author: taoyage
* @Date:   2016-10-09 18:40:54
* @Last Modified by:   taoyage
* @Last Modified time: 2016-10-09 19:48:14
*/

'use strict';

(function(angular){

	var module = angular.module('moviecat.movie_detail',[]);

	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/subject/:id', {
			templateUrl: 'movie_detail/view.html',
			controller: 'MovieDetail'
		});
	}]);

	module.controller('MovieDetail',
		[
		'$scope',
		'$routeParams',
		'JsonpService',
		'AppConfig',
		function($scope,$routeParams,JsonpService,AppConfig){
			$scope.movie = {};
			$scope.loading = 'loading....';

			JsonpService.jsonp(AppConfig.detailApiAddress + $routeParams.id,{},function(data){
				$scope.movie = data;
				$scope.loading = false;
				$scope.$apply();
			})
		}]);

})(angular);
