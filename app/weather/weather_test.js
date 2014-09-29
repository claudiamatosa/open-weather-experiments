'use strict';

describe('weatherApp.weather module', function() {

  beforeEach(module('weatherApp.weather'));

  describe('weather controller', function(){

    it('should be defined', inject(function($controller) {
      var weatherCtrl = $controller('WeatherCtrl');
      expect(weatherCtrl).toBeDefined();
    }));

  });
});