'use strict';

angular.module('stevenGerardCV.projects', [])

  .controller('projectsCtrl', ['$translate', '$scope', '$window', 'Config', function($translate, $scope, $window, Config) {
	$scope.totalItems = 80;
	$scope.currentPage = 1;
	$scope.isCollapsed = true;

	$scope.changePage = function() {
		var page = $scope.totalItems/10 - $scope.currentPage + 1;
		return 'views/projects/projects_' + page + '.html';
	}

	$scope.dateParse = function(date) {
		return Date.parse(date);
	}

    $scope.projects = Config.query({config:'projects'});
    $scope.screenHeight = {'height':$window.innerHeight - 250 + 'px'};
  }]);