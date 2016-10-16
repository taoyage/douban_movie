/*
* @Author: taoyage
* @Date:   2016-10-08 16:05:14
* @Last Modified by:   taoyage
* @Last Modified time: 2016-10-09 15:08:29
*/

'use strict';


(function(angular){

	var jsonp = angular.module('moviecat.services.jsonp',[]);
	jsonp.service('JsonpService',['$window','$document',function($window,$document){
		this.jsonp = function(url,data,callback){

			/*随机一个callback函数名 */
			var callbackFuncName = 'Callback_' + Math.random().toString().replace('.','');

			/*分解data对象,拼接成url字符串形式*/

			/* {id:1,name:'taoyage'} => ?id=1&name=taoyage& */
			var querystring = url.indexOf('?')== -1 ? '?':'&';

			for(var key in data){
				querystring += key + '=' + data[key] + '&';
			}

			/*进行拼接*/
			/* ?id=1&name=taoyage&callback=jsonCallback_1231313 */
			querystring += 'callback=' + callbackFuncName;

			/*创建script标签*/
			var script = $document[0].createElement('script');
			script.src = url + querystring;

			/*添加回调函数*/
			$window[callbackFuncName] = function(data){
				callback(data);
				/*回调完后删除jsonp请求标签*/
				$document[0].body.removeChild(script);
			};

			$document[0].body.appendChild(script);
		}
	}]);

})(angular);
