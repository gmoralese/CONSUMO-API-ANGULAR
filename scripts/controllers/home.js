 'use strict';

 app.controller('HomeController', function(Homefactory){
 	
 	var vm = this;
 	vm.values = [];

 	Homefactory.getValues().then(function(data){
 		console.log(data.data);
 		vm.values = data.data;
 	})

 });