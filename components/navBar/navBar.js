'use strict';

angular.module('stevenGerardCV.navBar', [])

.controller('navBarCtrl', ['$scope', '$translate', 'Config', function($scope, $translate, Config) {
	$scope.txts = Config.query({config:'navbar'});

	$scope.changeLanguage = function(lang) {
		switch (lang) {
			case 'FRENCH':
				$translate.use('fr');
				break;
			case 'ENGLISH':
				$translate.use('en');
				break;
			default:
				$translate.use('en');
				break;
		}
	};
}])

.directive('cvNavBar', function() {
	return {
	  templateUrl: 'components/navBar/navBar.html'
	};
});