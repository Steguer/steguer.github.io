'use strict';

angular.module('stevenGerardCV.home', [])

  .controller('homeCtrl', ['$scope', '$translate', 'Config', function($scope, $translate, Config) {
    $scope.img = Config.query({config:'home'});
  }]);