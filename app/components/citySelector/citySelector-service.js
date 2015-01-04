'use strict';

angular.module('weatherApp.citySelector.citySelector-service', [])

	.factory('weatherInfoProvider', ['$http', function($http) {
	
			return function (cityIds) {
				var data = {
					id: cityIds.join(','),
					units: 'metric',
					APPID: ${appId}
				};
				
		    return $http({
		    	method: 'GET',
		    	url: 'http://api.openweathermap.org/data/2.5/group',
		    	params: data
		    });
      }
	}]);
