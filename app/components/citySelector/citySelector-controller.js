'use strict';

angular.module('weatherApp.citySelector.citySelector-controller', [])

	.controller('CityListCtrl', ['$scope', 'weatherInfoProvider', function($scope, weatherInfoProvider) {		
		$scope.cityList = {};
		$scope.predicate = '';
		
		this.cities = {
			6058560: 'London',
			2643339: 'Luton',
			5000598: 'Manchester',
			2655603: 'Birmingham'
		};
		
		this.cityIds = Object.keys(this.cities);
		
		weatherInfoProvider(this.cityIds)
			.success(function(data) {
			  if (data.list) {
			    $scope.weatherInfo = data.list;
        }
      })
      .error(function() {
      	$scope.errorMessage = "Failed to load resource."
      });
	}]);