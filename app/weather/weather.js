'use strict';

angular.module('weatherApp.weather', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/weather/:cityId/:cityName', {
      templateUrl: 'weather/weather.html.tpl',
      controller: 'WeatherCtrl'
    });
  }])

  .controller('WeatherCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
		$scope.cityId = $routeParams.cityId;
  }]);