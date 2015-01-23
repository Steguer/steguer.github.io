'use strict';

angular.module('stevenGerardCV.experiences', [])

  .controller('experiencesCtrl', ['$translate', '$scope', '$window', 'Config', function($translate, $scope, $window, Config) {
	$scope.totalItems = 40;
	$scope.currentPage = 1;
	$scope.isCollapsed = true;

	$scope.changePage = function() {
		return 'views/experiences/experiences_' + $scope.currentPage + '.html';
	}

    $scope.experiences = Config.query({config:'experiences'});
    $scope.screenHeight = {'height':$window.innerHeight - 250 + 'px'};
  }]);