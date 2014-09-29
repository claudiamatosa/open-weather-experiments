'use strict';

angular.module('weatherApp.version', [
  'weatherApp.version.interpolate-filter',
  'weatherApp.version.version-directive'
])

.value('version', '0.1');
