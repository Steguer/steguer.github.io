'use strict';

// Declare app level module which depends on views, and components
angular.module('stevenGerardCV', [
  'ngRoute',
  'ngAnimate',
  'ngCookies',
  'pascalprecht.translate',
  'stevenGerardCV.titleBar',
  'stevenGerardCV.navBar',
  'stevenGerardCV.jsonServices',
  'stevenGerardCV.home',
  'stevenGerardCV.educations',
  'stevenGerardCV.personal',
  'stevenGerardCV.experiences',
  'stevenGerardCV.projects',
  'ui.bootstrap'
]).

config(['$routeProvider',
	'$translateProvider',
  function($routeProvider, $translateProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home/home.html',
      }).
      when('/educations', {
      	templateUrl: 'views/studies/studies.html',
      }).
      when('/personal', {
        templateUrl: "views/personal/personal.html",
      }).
      when('/experiences',  {
        templateUrl: "views/experiences/experiences.html",
      }).
      when('/projects',  {
        templateUrl: "views/projects/projects.html",
      }).
      otherwise({
        redirectTo: '/home'
      });

      $translateProvider.useStaticFilesLoader({
        prefix: 'rsc/config/text-',
        suffix: '.json'
      });
	  $translateProvider.preferredLanguage('en');
    $translateProvider.useLocalStorage();
	  $translateProvider.fallbackLanguage('en');
  }]);
