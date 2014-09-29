'use strict';

angular.module('weatherApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html.tpl',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);