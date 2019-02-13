'use strict';

app.factory('Homefactory', function($http){

	var url = 'https://mindicador.cl/api';

	var Homefactory = {

		getValues: function(){
			return $http.get(url).success(function(data){
				return data;
			}) 
			.error(function(err){
				console.log(err);
			})
		},

		createValues: function(){


		}


	};
	return Homefactory
});