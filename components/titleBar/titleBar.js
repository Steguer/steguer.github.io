'use strict';

angular.module('stevenGerardCV.titleBar', [])

  .controller('titleBarCtrl', ['$scope', 'Config', function($scope, Config) {
    $scope.img = Config.query({config:'titlebar'});
  }])

  .directive('cvTitleBar', function() {
    return {
      templateUrl: 'components/titleBar/titleBar.html'
    };
  });

