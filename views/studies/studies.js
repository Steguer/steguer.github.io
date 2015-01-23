'use strict';

angular.module('stevenGerardCV.educations', [])

  .controller('educationsCtrl', ['$translate', '$scope', '$window', 'Config', function($translate, $scope, $window, Config) {
	$scope.totalItems = 30;
	$scope.currentPage = 1;

	$scope.changePage = function() {
		return 'views/studies/schools_' + $scope.currentPage + '.html';
	}

    $scope.studies = Config.query({config:'studies'});
    $scope.screenHeight = {'height':$window.innerHeight - 250 + 'px'};
  }]);