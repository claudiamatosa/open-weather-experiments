'use strict';

describe('weatherApp.version module', function() {
  beforeEach(module('weatherApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
