'use strict';

angular.module('weatherApp.home', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html.tpl',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', [function() {

  }]);