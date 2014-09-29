'use strict';

angular.module('weatherApp.citySelector.citySelector-directive', [])

	.directive('cityList', [function() {
    var settings = {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'components/citySelector/cityList.html.tpl'
    };

    return settings;
  }])
  
  .directive('cityWeather', [function() {
    var settings = {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'components/citySelector/cityWeather.html.tpl'
    };

    return settings;
  }]);

