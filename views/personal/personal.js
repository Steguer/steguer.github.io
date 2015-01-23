'use strict';

angular.module('stevenGerardCV.personal', [])

  .controller('personalCtrl', ['$translate', '$scope', '$window', 'Config', function($translate, $scope, $window, Config) {
	$scope.totalItems = 40;
	$scope.currentPage = 1;
	$scope.isCollapsed = true;

	$scope.changePage = function() {
		return 'views/personal/personal_' + $scope.currentPage + '.html';
	}

    $scope.personal = Config.query({config:'personal'});
    $scope.screenHeight = {'height':$window.innerHeight - 250 + 'px'};
  }]);