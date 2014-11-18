'use strict';

describe('stevenGerardCV.version module', function() {
  beforeEach(module('stevenGerardCV.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
