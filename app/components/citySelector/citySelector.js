'use strict';

angular.module('weatherApp.citySelector', [
  'weatherApp.citySelector.citySelector-controller',
  'weatherApp.citySelector.citySelector-directive',
  'weatherApp.citySelector.citySelector-service'
])

  .value('citySelector', '0.1');
