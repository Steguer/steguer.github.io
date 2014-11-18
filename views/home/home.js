'use strict';

angular.module('stevenGerardCV.home', [])

  .controller('homeCtrl', ['$scope', 'Config', function($scope, Config) {
    $scope.img = Config.query({config:'imgConfig'});
  }]);