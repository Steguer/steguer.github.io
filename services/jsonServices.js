var jsonServices = angular.module('stevenGerardCV.jsonServices', ['ngResource'])

jsonServices.factory('Config',['$resource', 
	function($resource){
		return $resource('rsc/config/:config.json', {}, {
      	query: {method:'GET', params:{config:''}}
    });
}]);