/*
* @Author: taoyage
* @Date:   2016-10-08 23:19:03
* @Last Modified by:   taoyage
* @Last Modified time: 2016-10-09 20:01:20
*/

'use strict';

(function(angular){

	var module = angular.module('movievat.directives.auto_focus',[]);
	module.directive('autoFocus',['$location',function($location){
		return{
			restrict:'A',
			link: function($scope,iElm,iattrs,controller){
				$scope.$location = $location;
				$scope.$watch('$location.path()',function(now){
					var aLink = iElm.children().attr('href');
					var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');

					if(now.startsWith(type)){
						iElm.addClass('active');
					}else{
						iElm.removeClass('active');
					}
				});
			}
		}
	}]);

})(angular);
