'use strict';

// Declare app level module which depends on views, and components
angular.module('stevenGerardCV', [
  'ngRoute',
  'ngAnimate',
  'pascalprecht.translate',
  'stevenGerardCV.titleBar',
  'stevenGerardCV.navBar',
  'stevenGerardCV.jsonServices',
  'stevenGerardCV.home',
  'stevenGerardCV.educations',
  'ui.bootstrap'
]).

config(['$routeProvider',
	'$translateProvider',
  function($routeProvider, $translateProvider) {
    $routeProvider.
      when('/home/:lang', {
        templateUrl: 'views/home/home.html',
        controller: 'languageCtrl'
      }).
      when('/educations/:lang', {
      	templateUrl: 'views/studies/studies.html',
      	controller: 'languageCtrl'
      }).
      otherwise({
        redirectTo: '/home/en'
      });

   //    $translateProvider.translations('en', translationsEN);
	  // $translateProvider.translations('fr', translationsFR);
	  $translateProvider.preferredLanguage('en');
	  $translateProvider.fallbackLanguage('en');
  }]).

controller('languageCtrl', ['$translate', '$scope', '$routeParams',
 function($translate, $scope, $routeParams){
		$translate.use($routeParams.lang);
		$scope.currentLang = $routeParams.lang;
}]);
