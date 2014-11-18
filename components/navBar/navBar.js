'use strict';

angular.module('stevenGerardCV.navBar', [])

.controller('navBarCtrl', ['$scope', '$translate', 'Config', function($scope, $translate, Config) {
	$scope.txts = Config.query({config:'textConfig'});
	$scope.currentLang = $translate.use();
}])

.directive('cvNavBar', function() {
	return {
	  templateUrl: 'components/navBar/navBar.html'
	};
});