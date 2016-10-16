/*
* @Author: taoyage
* @Date:   2016-10-09 15:57:06
* @Last Modified by:   taoyage
* @Last Modified time: 2016-10-09 18:42:52
*/

'use strict';

(function(angular){

	var module = angular.module('moviecat.search',[]);

	module.directive('search',['$location','$route',function($location,$route){
		return{
			scope: {},
			restrict : 'AE',
			template : '<form class="navbar-form navbar-right" ng-submit="search()"><input type="text" class="form-control" placeholder="Search..." ng-model="text"></form>',
			replace : true,
			link : function($scope,iElm,iattrs,controller){
				$scope.text = '';
				$scope.search = function(){
					$route.updateParams({ category:'search',q : $scope.text});
				}
			}
		}
	}]);

})(angular);
