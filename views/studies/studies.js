'use strict';

angular.module('stevenGerardCV.educations', [])

  .controller('educationsCtrl', ['$scope', '$window', 'Config', function($scope, $window, Config) {
	$scope.totalItems = 40;
	$scope.currentPage = 1;

	$scope.changePage = function() {
		return 'views/studies/schools_' + $scope.currentPage + '.html';
	}

    $scope.img = Config.query({config:'imgConfig'});
    $scope.screenHeight = {'height':$window.innerHeight - 250 + 'px'};
  }]);