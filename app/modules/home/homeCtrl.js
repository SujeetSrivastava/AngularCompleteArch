(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('boon4')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, boon4!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();
		vm.loginID = "";
		vm.loginPwd = "";


		vm.logon = function(){
			alert('I git clicked login' + vm.loginID + vm.loginPwd );
		}

	}

})();
