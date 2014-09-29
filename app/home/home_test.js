'use strict';

describe('weatherApp.home module', function() {

  beforeEach(module('weatherApp.home'));

  describe('home controller', function(){

    it('should be defined', inject(function($controller) {
      var homeCtrl = $controller('HomeCtrl');
      expect(homeCtrl).toBeDefined();
    }));

  });
});